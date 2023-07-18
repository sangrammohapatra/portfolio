import { MdEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ContactDetails.css";
import data from "../assets/details.json";
const ContactDetails = () => {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };
  const copyContactHandler = () => {
    let text = document.getElementById("contNo").innerHTML;
    navigator.clipboard.writeText(text);

    toast.success("Contact copied to clipboard !", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const copyMailHandler = () => {
    let text = document.getElementById("mailId").innerHTML;
    navigator.clipboard.writeText(text);

    toast.success("Email copied to clipboard !", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <div className="contactContainer">
        <div className="mail">
          <MdEmail color="white" />
          <Mailto
            email={data.body.contact.emailId}
            subject="Hello & Welcome"
            body="Hello world!"
          >
            <span id="mailId">{data.body.contact.emailId}</span>
          </Mailto>
          <Button sx={{ width: "10px" }} onClick={copyMailHandler}>
            <FaCopy color="white" />
          </Button>
        </div>
        <div className="contact">
          <BsTelephoneOutboundFill />
          <span id="contNo">{data.body.contact.phoneNumber}</span>
          <Button sx={{ width: "10px" }} onClick={copyContactHandler}>
            <FaCopy color="white" />
          </Button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};
export default ContactDetails;
