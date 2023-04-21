export function listenTo(event: string, callback: () => void) {
  document.addEventListener(event, callback);
}
export function stopListenTo(event: string, callback: () => void) {
  document.removeEventListener(event, callback);
}
export function triggerFor(event: string, data?: Object) {
  const e = new CustomEvent(event, { detail: data ? data : {} });
  document.dispatchEvent(e);
}
