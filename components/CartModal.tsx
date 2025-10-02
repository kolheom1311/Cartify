"use client";
import React from "react";
import { X, Minus, Plus, Trash2, CreditCard, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const CartModal: React.FC = () => {
  const { state, dispatch } = useCart();

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } });
    } else {
      removeItem(id);
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <Dialog
      open={state.isOpen}
      onOpenChange={() => dispatch({ type: "TOGGLE_CART" })}
    >
      <DialogContent className="sm:max-w-[625px] md:max-w-[750px] lg:max-w-[900px] w-[90vw] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">{state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="p-6 bg-secondary rounded-full">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Your cart is empty</h3>
              <p className="mt-2 text-muted-foreground">
                Looks like you haven't added anything to your cart yet.
              </p>
              <DialogClose asChild>
                <Button className="mt-6">Continue Shopping</Button>
              </DialogClose>
            </div>
          ) : (
            <ScrollArea className="h-full pr-6">
              <div className="flex flex-col gap-6 py-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-md overflow-hidden border flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        ₹{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-bold text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
        {state.items.length > 0 && (
          <>
            <Separator className="my-4" />
            <DialogFooter>
              <div className="w-full space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping and taxes will be calculated at checkout.
                </p>
                <Button
                  size="lg"
                  className="w-full"
                  disabled={state.isLoading}
                >
                  {state.isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;