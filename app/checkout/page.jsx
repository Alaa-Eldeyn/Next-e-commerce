"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_Publishable_key);

export default function App() {
  const searchParams = useSearchParams();
  const options = {
    // passing the client secret obtained from the server
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")) * 100,
    // clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={Number(searchParams.get("amount"))} />
      </Elements>
    </Suspense>
  );
}
