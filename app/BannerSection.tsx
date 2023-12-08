import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const BannerSection: IComponent = () => {
  const router = useRouter();
  return (
    <section className=" flex items-center justify-between ">
      <div className="w-1/2">
        <div className="text-[#121212] text-6xl py-16">
          Florist
          <span role="img" aria-label="sunflower">
            🌻
          </span>
          <br />
          Khám phá thế giới hoa giấy
        </div>

        <div className="text-gray-600 text-xl font-normal leading-normal">
          {/* Our flowers will be your choices */}
          Hoa của chúng tôi sẽ là lựa chọn hàng đầu của bạn
        </div>
        <button
          className="rounded text-lg hover:opacity-80 mt-4 whitespace-nowrap p-2 px-3 bg-primary text-white"
          onClick={() => router.push('/shop')}>
          {/* Shopping now */}
          Mua ngay
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-center py-12">
        <div className="w-3/4 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/mock/flowers/home/${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              className="w-40 h-40 object-cover m-1 rounded-md"
              width={192}
              height={192}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
