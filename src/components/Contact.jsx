import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-white py-24 text-black sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="/images/contact-image-1.jpg"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="/images/contact-image-2.jpg"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="/images/contact-image-3.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[15px] uppercase">
            Join positive school
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] uppercase">
            let's <b>b</b>uild the <br />
            new <b>e</b>ra of <br />
            <b>h</b>ip <b>h</b>op together
          </p>
          <Button
            title="CONTACT US"
            containerClass="mt-10 cursor-pointer text-white !bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
