## Gtranz

This is a simple context to let you make intro/outro animations with GSAP in Next.js.

Original idea is from [johnpolacek/TweenPages](https://tweenpages.vercel.app/docs)

## Usage

- Wrap your content in `_app.tsx`

```ts
import Gtranz from "@chundev/gtranz";

<Gtranz>
  <main className={font.className}>
    <Head>
      <title>Next.js Transition</title>
    </Head>
    <Component {...pageProps} />
  </main>
</Gtranz>;
```

- then setup your outro with timeline

```ts
import { timeline, useIsomorphicLayoutEffect } from "@chundev/gtranz";

const timeline = useTimeline();

// intro
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
