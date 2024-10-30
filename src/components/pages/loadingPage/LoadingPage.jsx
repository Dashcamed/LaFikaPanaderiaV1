import React from "react";
import Loader from "../../common/loader/Loader";

const LoadingPage = () => {
  return (
    <div className="flex h-dvh flex-col justify-center">
      <div>
        <p className="text-xl lg:text-2xl text-center align-middle">
          Procesando...
        </p>
      </div>
      <div className="text-xl lg:text-2xl text-center align-middle">
        <Loader />
      </div>
    </div>
  );
};

export default LoadingPage;
