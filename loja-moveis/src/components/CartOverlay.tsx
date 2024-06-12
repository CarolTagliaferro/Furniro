import React from "react";

interface CartOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold">Carrinho de Compras</h2>
        {}
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-red-500 text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CartOverlay;
