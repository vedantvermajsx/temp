import toast from "react-hot-toast";

function MyToaster(message, duration, success) {
  if (success) {
    toast.success(message, {
      duration: duration,
      position: "bottom-center",
    });
  } else {
    toast.error(message, {
      duration: duration,
      position: "bottom-center",
    });
  }
}

export default MyToaster;
