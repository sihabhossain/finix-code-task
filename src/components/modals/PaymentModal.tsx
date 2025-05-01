import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import VisuallyHidden from "../VisuallyHidden";
import Image from "next/image";

export default function PaymentMethodModal() {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bkash");

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#63CFA0] hover:bg-green-300 w-full py-2 rounded-3xl text-black"
      >
        Join event
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 border-none max-w-md rounded-xl overflow-hidden">
          <div className="bg-[#1e6e5c] text-[#f5e6d0] p-6 pt-12 pb-8 relative">
            {/* Money icon */}
            <div className="flex justify-center mb-6">
              <Image src="/money.png" alt="money" width={200} height={200} />
            </div>

            <DialogTitle className="text-4xl">
              <VisuallyHidden>
                <p className="whitespace-pre-line">
                  {" "}
                  Choose Payment
                  {"\n"}
                  Method
                </p>
              </VisuallyHidden>
            </DialogTitle>

            {/* Visible title (optional) */}
            <h2 className="text-center text-[#f5e6d0] text-3xl font-medium mb-8">
              Choose Payment Method
            </h2>

            {/* Payment options */}
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5 mt-0.5">
                  <RadioGroupItem
                    value="bkash"
                    id="bkash"
                    className="border-[#f5e6d0] text-[#1e6e5c] data-[state=checked]:bg-[#f5e6d0]"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <Label
                      htmlFor="bkash"
                      className="text-xl font-medium text-[#f5e6d0] mr-2"
                    >
                      bKash
                    </Label>
                    <Image
                      src="/bkash.png"
                      alt="bkash"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-[#f5e6d0] mt-1">
                    Send the payment now via bKash to confirm your spot
                    instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5 mt-0.5">
                  <RadioGroupItem
                    value="cash"
                    id="cash"
                    className="border-[#f5e6d0] text-[#1e6e5c] data-[state=checked]:bg-[#f5e6d0]"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <Label
                      htmlFor="cash"
                      className="text-xl font-medium text-[#f5e6d0] mr-2"
                    >
                      Cash
                    </Label>
                    <Image src="/cash.png" alt="cash" width={20} height={20} />
                  </div>
                  <p className="text-[#f5e6d0] mt-1">
                    Pay the event fee directly to the host before the game
                    starts.
                  </p>
                </div>
              </div>
            </RadioGroup>

            {/* Continue button */}
            <Button className="w-full mt-8 bg-[#222222] hover:bg-black text-white rounded-full py-6 text-lg font-medium">
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
