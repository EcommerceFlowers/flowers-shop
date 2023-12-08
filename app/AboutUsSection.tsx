'use client';

export const AboutUsSection: IComponent = () => {
  return (
    <section className="mt-12 py-12">
      <div className="flex items-center justify-center px-20">
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1 className="text-3xl font-medium text-black/60" style={{}}>
          Giới thiệu
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="mt-20 items-center justify-center bg-gray-200">
        <p className="px-52 text-center text-2xl leading-10">
          Chào mừng bạn đến với cửa hàng hoa giấy của chúng tôi! Cửa hàng chúng tôi đã được thành
          lập từ năm 2022. Với sứ mệnh mang đến những sản phẩm hoa giấy chất lượng và đẹp mắt, chúng
          tôi luôn cố gắng hết sức để đáp ứng nhu cầu của khách hàng.
        </p>
        <p className="px-60 text-center text-2xl leading-10">
          Chúng tôi tin rằng, với sự cống hiến và tâm huyết, cửa hàng hoa giấy của chúng tôi sẽ
          không ngừng phát triển và đạt được nhiều thành công hơn nữa trong tương lai.
        </p>
      </div>
    </section>
  );
};
