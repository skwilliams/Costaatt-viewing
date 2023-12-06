import React,{useState, useEffect,useRef} from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";

import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";

const paragraphStyles={
  webkitLineClamp:3,
  webkitBoxOrient: 'vertical',
  overflow:"hidden",
  display:"-webkit-box",

}




const accreditation = () => {

  const [isOpen, setIsOpen]=useState(false);
  const [showReadMoreButton,setShowReadMoreButton] = useState(false);
const ref = useRef(null)

useEffect(() => {
  if(ref.current){
    console.log(ref.current.scrollHeight, ref.current.clientHeight)
    setShowReadMoreButton(ref.current.scrollHeight !== ref.current.clientHeight)
  }

})

  return (
    <>
      <Head>
        <title>Accrediation |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Accrediation" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/accreditation">Accrediation</Link>
      </p>

      <section className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.marginBottomSmall}>
          {" "}
          Implementing a modal
        </h2>
        <p  style ={(isOpen ? null : paragraphStyles) ref ={ref} }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
          risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio
          facilisis mauris sit amet massa vitae. Mi bibendum neque egestas
          congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis. Malesuada
          pellentesque elit eget gravida cum sociis natoque penatibus et. Proin
          fermentum leo vel orci porta non pulvinar neque laoreet. Gravida neque
          convallis a cras semper. Molestie at elementum eu facilisis sed odio
          morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet risus
          nullam eget. Nam libero justo laoreet sit. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Sit amet facilisis magna
          etiam. Imperdiet sed euismod nisi p
        </p>
        <a
          onClick={() => setisOpen(!isOpen)}

          className={standardStyles.btnText}>
        
          Read More &rarr;
        </a>

        <button
          onClick={() => setShowModal(true)}
          className={standardStyles.btn}
        >
          Read More &rarr;
        </button>

     
      </section>
      <section className={standardStyles.sectionNoSidenav}>
        <div> Other content </div>
      </section>
    </>
  );

}

export default accreditation