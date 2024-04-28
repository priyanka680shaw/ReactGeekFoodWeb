
import { Hero } from '../Hero/Hero'
import { About } from '../About/About'
import { Testimonial } from '../Testimonal/Testimonial'

export const Home = () => {
//array ddata 

const feedback = [
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    userName : "Priya",
    userPosotion : "Ceo",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
    userName : "Priya",
    userPosotion : "Employee",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    userName : "Kajal",
    userPosotion : "Manager",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
    userName : "Shivam",
    userPosotion : "BackOffice Manager",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    userName : "Rahyan",
    userPosotion : "Ceo",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus.",
    userName : "Priyanka",
    userPosotion : "Ceo",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus.",
    userName : "Priyanka",
    userPosotion : "Ceo",
    userImage : "",
  },
  {
    userFeedback : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    userName : "Priyanka",
    userPosotion : "Ceo",
    userImage : "",
  },
]

  return (
    <>
        <main>
            <Hero/>
            <About/>
            <section style={{width : "90%" , margin :"auto" , display :"flex" , flexWrap : "wrap" , justifyContent : "space-between" , padding : "20px 0px"}}>
              {
                feedback.map((data , index)=>{
                  return(
                    <Testimonial key = {index} userFeedback = {data.userFeedback} userName = {data.userName} userPosotion = {data.userPosotion}/>
                  )
                })
              }
            </section>
           
        </main>
    </>
  )
}
