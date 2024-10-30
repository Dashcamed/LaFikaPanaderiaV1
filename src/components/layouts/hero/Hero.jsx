import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830834/kanelbullar_k5yihy.svg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Bienvenido a La Fika</h1>
          <p className="py-6">Ya inauguramos!</p>
          <button className="btn btn-primary">Ver Productos</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
