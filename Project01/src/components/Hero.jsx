const Herosection = () => {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="btn">
            <button>Shop Now</button>
            <button id="cat_btn">Category</button>
        </div>
        <div className="avilable">
            <p>Also Available on</p>
            <div className="brand_img">
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
        </div>
      </div>
      <div className="hero_img"></div>
      <img src="/images/shoe_image.png" alt="" />
    </main>
  );
};

export default Herosection;
