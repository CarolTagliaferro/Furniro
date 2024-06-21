import { BsClockFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { Classes } from "../../../utils/tailwindPredefs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must have at least 3 characters" }),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must have at least 10 characters" }),
});

type contactFormData = z.infer<typeof contactSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<contactFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="pb-16">
      <div className="text-center lg:pb-24 lg:pt-24 font-poppins ">
        <h1 className="font-bold text-3xl pb-3">Get In Touch With Us</h1>
        <p className="text-grayOne">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="flex justify-center gap-40 font-poppins">
        <div className="space-y-8">
          <div className={Classes.alignIconText}>
            <div className="mr-7 text-3xl text-black">
              <TiLocation />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Address</h2>
              <p className={Classes.textFormP}>
                236 5th SE Avenue, New <br /> York NY10000, United
                <br /> States
              </p>
            </div>
          </div>
          <div className={Classes.alignIconText}>
            <div className="mr-9 text-xl text-black">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Phone</h2>
              <p className={Classes.textFormP}>
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className={Classes.alignIconText}>
            <div className="mr-9 text-xl text-black">
              <BsClockFill />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Opening Hours</h2>
              <p className={Classes.textFormP}>
                Monday-Friday: 9:00 - <br />
                22:00 <br />
                Saturday-Sunday: 9:00 - <br /> 21:00
              </p>
            </div>
          </div>
        </div>
        <div>
          <form className="">
            <div className={Classes.formContactPosition}>
              <label className={Classes.formLabel}>Your name</label>
              <input
                className={`${Classes.formInputs}  w-96 h-14`}
                type="text"
                placeholder="Abc"
                {...register("name")}
              />
              {errors.name && (
                <p className={Classes.FormErrors}>{errors.name.message}</p>
              )}
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>
                Email address
              </label>
              <input
                className={`${Classes.formInputs} w-96 h-14`}
                type="email"
                placeholder="Abc@def.com"
                {...register("email")}
              />
              {errors.email && (
                <p className={Classes.FormErrors}>{errors.email.message}</p>
              )}
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>Subject</label>
              <input
                className={`${Classes.formInputs}  w-96 h-14`}
                type="text"
                placeholder="This is optional"
                {...register("subject")}
              />
              {errors.subject && (
                <p className={Classes.FormErrors}>{errors.subject.message}</p>
              )}
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>Message</label>
              <input
                className={`${Classes.formInputs} pt-3 pb-16 w-96 h-28`}
                type="text"
                placeholder="Hi! I'd like to ask about"
                {...register("message")}
              />
              {errors.message && (
                <p className={Classes.FormErrors}>{errors.message.message}</p>
              )}
            </div>
            <div className="pt-10">
              <button
                className="bg-primary hover:bg-primaryDark text-white text-sm rounded px-10 py-3 lg:px-20"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
