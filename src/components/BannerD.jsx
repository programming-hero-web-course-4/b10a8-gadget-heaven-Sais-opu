
const BannerD = ({ buttons = [], backgroundColor = "bg-[#9538E2]", className = "" }) => {
    return (
        <div className={`text-center pb-60 ${backgroundColor} ${className}`}>
            <h1 className="text-5xl font-bold mt-28 mb-4 pt-10 ">
            Product Details
            </h1>
            <p>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
            </p>
            
        </div>
    );
}
export default BannerD;