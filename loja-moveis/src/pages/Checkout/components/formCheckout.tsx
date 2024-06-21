import { useEffect } from "react";
import { Classes } from "../../../utils/tailwindPredefs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { formatPrice } from "../../../utils/formatPrice";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters" }),
  companyName: z.string().optional(),
  zip: z.string().length(8, { message: "ZIP must be 8 characters long" }),
  country: z.string().min(3, { message: "Country is required" }),
  street: z.string().min(3, { message: "Street is required" }),
  city: z.string().min(3, { message: "City must be at least 3 characters" }),
  province: z
    .string()
    .min(2, { message: "Province must be at least 2 characters" }),
  addon: z.string().optional(),
  email: z.string().email("Invalid email address"),
  addInfo: z.string().optional(),
});

type checkoutFormData = z.infer<typeof checkoutSchema>;

const FormCheckout = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const {
    register,
    handleSubmit: onSubmitForm,
    setValue,
    watch,
    formState: { errors },
  } = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onSubmit: SubmitHandler<checkoutFormData> = (data) => {
    console.log(data);
  };

  const zip = watch("zip");

  useEffect(() => {
    if (zip?.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${zip}/json/`)
        .then((response) => {
          const { logradouro, localidade, uf } = response.data;
          setValue("street", logradouro);
          setValue("city", localidade);
          setValue("province", uf);
          setValue("country", "Brazil");
        })
        .catch((error) => {
          console.error("Error finding address: ", error);
        });
    }
  }, [zip, setValue]);

  return (
    <div className="font-poppins my-20">
      <h1 className="font-semibold text-3xl mb-10 text-center">
        Billing details
      </h1>
      <div className="flex flex-col gap-8  md:flex-row md:justify-center">
        <form className="w-full max-w-lg md:w-1/2 px-3">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                First Name
              </label>
              <input
                type="text"
                {...register("firstName")}
                className={Classes.InputFormCheck}
              />
              {errors.firstName && (
                <p className={Classes.FormErrors}>{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName")}
                className={Classes.InputFormCheck}
              />
              {errors.lastName && (
                <p className={Classes.FormErrors}>{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Company Name (Optional)
              </label>
              <input
                type="text"
                {...register("companyName")}
                className={Classes.InputFormCheck}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                ZIP code
              </label>
              <input
                type="number"
                {...register("zip")}
                className={Classes.InputFormCheck}
              />
              {errors.zip && (
                <p className={Classes.FormErrors}>{errors.zip.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Country / Region
              </label>
              <input
                type="text"
                {...register("country")}
                className={Classes.InputFormCheck}
              />
              {errors.country && (
                <p className={Classes.FormErrors}>{errors.country.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Street address
              </label>
              <input
                type="text"
                {...register("street")}
                className={Classes.InputFormCheck}
              />
              {errors.street && (
                <p className={Classes.FormErrors}>{errors.street.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Town / City
              </label>
              <input
                type="text"
                {...register("city")}
                className={Classes.InputFormCheck}
              />
              {errors.city && (
                <p className={Classes.FormErrors}>{errors.city.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Province
              </label>
              <input
                type="text"
                {...register("province")}
                className={Classes.InputFormCheck}
              />
              {errors.province && (
                <p className={Classes.FormErrors}>{errors.province.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Add-on
              </label>
              <input
                type="text"
                {...register("addon")}
                className={Classes.InputFormCheck}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className={Classes.InputFormCheck}
              />
              {errors.email && (
                <p className={Classes.FormErrors}>{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 pt-5">
              <input
                type="text"
                placeholder="Additional information"
                {...register("addInfo")}
                className={`${Classes.InputFormCheck} pl-5 text-sm`}
              />
            </div>
          </div>
        </form>
        <div className="w-full max-w-lg md:w-1/2 px-3">
          <div className="px-6 pt- grid grid-cols-2">
            <h2 className="text-2xl font-semibold mb-6">Product</h2>
            <h2 className="text-2xl font-semibold mb-6 text-right">Price</h2>
          </div>
          <div className="px-6 grid grid-cols-2">
            <div>
              {items.map((item) => (
                <p key={item.id}>
                  <span className="text-grayOne">{item.name}</span>
                  <span className="text-black px-2 text-sm">
                    x {item.quantity}
                  </span>
                </p>
              ))}
            </div>
            <div className="text-right">
              {items.map((item) => (
                <p key={item.id}>{formatPrice(item.price * item.quantity)}</p>
              ))}
            </div>
          </div>
          <div className="px-6 grid grid-cols-2 pt-5">
            <div>
              <span className="font-medium">Subtotal</span>
            </div>

            <div className="text-right">
              <p>{formatPrice(calculateSubtotal())}</p>
            </div>
          </div>
          <div className="px-6 grid grid-cols-2 pt-5 pb-7">
            <div>
              <span className="font-medium">Total</span>
            </div>

            <div className="text-right">
              <p className="text-2xl text-primary font-bold">
                {formatPrice(calculateSubtotal())}
              </p>
            </div>
          </div>
          <hr />
          <form className="pt-10 px-6">
            <div>
              <div>
                <input type="radio" name="paymentMethod" />
                <span className="pl-2 font-medium">Direct Bank Transfer</span>
                <p className="text-grayOne font-light py-3">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="flex text-grayOne pb-3">
                <input type="radio" name="paymentMethod" />
                <span className="pl-2 font-medium">Credit Card</span>
              </div>
              <div className="flex text-grayOne">
                <input type="radio" name="paymentMethod" />
                <span className="pl-2 font-medium">Cash on Delivery</span>
              </div>
              <div className="pt-6">
                <p className="font-light">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <NavLink to={"/errorPage"}>
                    <button className="font-semibold hover:underline  pl-1">
                      privacy policy.
                    </button>
                  </NavLink>
                </p>
              </div>
              <div className="pt-7 mx-auto">
                <button
                  type="button"
                  onClick={onSubmitForm(onSubmit)}
                  className="border border-black rounded-lg px-10 py-3 hover:border-primaryDark hover:text-primaryDark"
                >
                  Place order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
