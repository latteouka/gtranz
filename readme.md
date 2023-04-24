## Gtranz


[DEMO](https://transition.chundev.com/)

This is a simple timeline context lets you setup intro/outro animations with
GSAP in Next.js.

Original idea is from [johnpolacek/TweenPages](https://tweenpages.vercel.app/docs)

You can read how it works in his doc.

If you can read Chinese, check [this](https://doc.chundev.com/blogs/transition-next)
and learn what I've edited.

## Usage

```bash
npm install @chundev/gtranz

yarn add @chundev/gtranz
```

- Wrap your content in `_app.tsx`

```tsx
import Gtranz from "@chundev/gtranz";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
       <Head>
          <title>Next.js Transition</title>
       </Head>
       <Gtranz>
       <Component {...pageProps} />
       </Gtranz>
    </main>
  );
}
```

- then setup your outro with timeline

```ts
import { timeline, useIsomorphicLayoutEffect } from "@chundev/gtranz";

const timeline = useTimeline();

// intro
// will play when enter the page
useIsomorphicLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".title",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
      }
    );
  });

  return () => {
    ctx.revert();
  };
}, []);

// outro
useIsomorphicLayoutEffect(() => {
  timeline.add(
    gsap.to(".title", {
      opacity: 0,
    }),
    0
  );

  return () => {
    timeline?.clear();
  };
}, []);
```

## Dealing with overwrite

EDIT: **ALTHOUGH IT CAN BE DONE THIS WAY, IT IS PROBABLY NOT A BEST SOLUTION.**  
Check out the [discussion](https://greensock.com/forums/topic/29470-gsap-page-transitions-in-nextjs/).  
You can still do transitions with default overwrite:false setting.

If you are trying to setup animations like I did in the demo.  
You might also realize that sometimes you have to overwrite gsap
tweens for some instant animations(for the same element).  
In the demo, I tween the positions of the images which are also set in the outro.
And that messes up everything.  
What you can to do is let gsap overwrite by default.

```ts
// put this somewhere high and do it once
// this effects globally
gsap.defaults({ overwrite: true });
```

And then you arrange all the setup cycle by yourself.

You might:

1. use a state to determine the setup order of intro/outro.
(if you overwrite some element's tweens that are also used in outro)

```ts
const timeline = useTimeline();
const [introPlayed, setIntroPlayed] = useState(false);
// intro
useIsomorphicLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".title",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        onComplete: () => {
          setIntroPlayed(true);
        },
      }
    );
  });

  return () => {
    ctx.revert();
  };
}, []);

// out
useIsomorphicLayoutEffect(() => {
  if (!introPlayed) return;
  timeline.add(
    gsap.to(".title", {
      opacity: 0,
    }),
    0
  );

  return () => {
    timeline?.clear();
  };
}, [introPlayed]);
```

2. use custom event to re-setup outro whenever you want.

```ts
const timeline = useTimeline();
const [introPlayed, setIntroPlayed] = useState(false);

// intro
useIsomorphicLayoutEffect(() => {
  // bind event
  document.addEventListener("setupAnimation", setupOutro);

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".title",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        onComplete: () => {
          // dispatch when intro end
          dispatchSetupOutroEvent("setupAnimation");
        },
      }
    );
  });

  return () => {
    document.removeEventListener("setupAnimation", setupOutro);
    ctx.revert();
  };
}, []);

// outro setup
function setupOutro() {
  timeline.add(
    gsap.to(".title", {
      opacity: 0,
    }),
    0
  );
}
```

```ts
// dispatch when other animation(at anywhere) is over
gsap.fromTo(
  ".title",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    onComplete: () => {
      dispatchSetupOutroEvent("setupAnimation");
    },
  }
);
```

custom event function looks like:

```ts
function dispatchSetupOutroEvent(eventName: string, data: any) {
  const e = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(e);
}

dispatchSetupOutroEvent("setupAnimation");
```

I don't really know if it's good practice or not.  
But I did solve my problem and make nice transition by doing so.

