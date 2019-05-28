export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD"
  });
}
