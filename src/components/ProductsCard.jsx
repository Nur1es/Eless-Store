import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/elessSlice";
import { ToastContainer, toast } from "react-toastify";

export default function ProductsCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.title;

  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("-");
  };
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  const placeholderImage =
    "https://cdn.icon-icons.com/icons2/1288/PNG/512/1499345639-corrupt-file_85336.png";

  return (
    <div className='group'>
      <div
        onClick={handleDetails}
        className='w-full h-96 cursor-pointer overflow-hidden'
      >
        <img
          className='w-full h-full object-cover group-hover:scale-110 duration-500'
          src={product.images}
          alt='productImage'
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div>
          <div>
            <div className='flex flex-row justify-between items-center py-2'>
              <p className='font-titleFont text-base '>${product.price}</p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      images: product.images,
                      price: product.price,
                      quantity: 1,
                      description: product.description,
                    })
                  ) & toast.success(`${product.title} is add`)
                }
                className='px-1 border-[1px] font-titleFont text-black font-[4px] hover:text-white hover:bg-black duration-500'
              >
                Add to Basket
              </button>
            </div>
            <h2 className='font-titleFont font-bold text-[18px]'>
              {product.title}
            </h2>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pouseOnFocusLoss
        draggable
        pouseOnHover
        theme='dark'
      />
    </div>
  );
}
