import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function PaymentModal({ isOpen, setIsOpen, price }) {
  function closeModal() {
    setIsOpen(false);
  }

  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_DmoyJpqVELKTw8",
      amount: price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie purchase or rental",
      image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        setIsOpen(false);
        alert("Payment Done!");
      }, //executed when either payment fails or succeeds.
      theme: { color: "#F84464" },
    };

    let RazorPay = new window.Razorpay(options);
    RazorPay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please Make a Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Complete your payment to buy/rent the movie from here
                    </p>
                  </div>

                  <div className="w-full mt-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-bmsRed-300 px-4 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-bmsRed-300 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                      Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-bmsRed-300 hover:bg-bmsRed-50"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
