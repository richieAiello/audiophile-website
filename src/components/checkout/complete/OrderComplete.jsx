import { useState } from 'react';
import { useCartDispatch } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import OrderInfo from './OrderInfo';
import BackBtn from '../../shared-components/BackBtn';
import icon from '../../../assets/order.svg';

const OrderComplete = props => {
  const dispatch = useCartDispatch();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="flex items-center h-screen w-screen fixed z-50 left-0 top-0 bg-[rgba(0,0,0,.4)]">
      <div className="container p-8 rounded-lg bg-white max-h-[calc(100vh-12rem)] overflow-y-scroll">
        {confirm ? (
          <>
            <img src={icon} alt="" className="h-16 w-16" />
            <h3 className="font-bold text-[1.5rem] leading-7 text-black uppercase tracking-[0.86px] mt-6 mb-4">
              Thank you for your order
            </h3>
            <p className="opacity-50 mb-6">
              You will receive an email confirmation shortly.
            </p>
          </>
        ) : (
          <>
            <BackBtn />
            <h3 className="font-bold text-[1.5rem] leading-7 text-black uppercase tracking-[0.86px] mb-4">
              Please confirm your order
            </h3>
          </>
        )}
        <OrderInfo />
        {confirm ? (
          <Link
            to="/"
            className="btn text-center bg-orange text-white py-[0.9375rem] col-span-2
          hover:bg-light-orange hover:text-hero-black
          focus:bg-light-orange focus:text-hero-black"
            tabIndex="1"
          >
            Back to Home
          </Link>
        ) : (
          <button
            type="button"
            className="btn w-full text-center bg-orange text-white py-[0.9375rem] col-span-2
          hover:bg-light-orange hover:text-hero-black
          focus:bg-light-orange focus:text-hero-black"
            onClick={() => {
              dispatch({ type: 'EMPTY' });
              setConfirm(true);
            }}
            tabIndex="1"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderComplete;
