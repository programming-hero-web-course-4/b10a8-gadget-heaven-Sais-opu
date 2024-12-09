const Banner2 = ({ buttons = [], backgroundColor = "bg-[#9538E2]", className = "" }) => {
    return (
        <div className={`text-center ${backgroundColor} ${className}`}>
            <h1 className="text-5xl font-bold mt-28 mb-4 pt-10">
                Dashboard
            </h1>
            <p>
            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            
        </div>
    );
};

export default Banner2;
