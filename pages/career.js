import NotFound from '@layouts/404'
import Base from '@layouts/Baseof'
import { getListPage } from '@lib/contentParser'
import Image from 'next/image'

// import { getRegularPage } from "@lib/contentParser";

const notFound = ({ frontmatter }) => {

  
  return (
    <Base>
      <div className="row p-5 ">
        <div className="sm:col-12 md:col-12 lg:col-12">
          <div className="flexx bgc ">


            <div className="sm:col-12  md:col-12 lg:col-6 p-20 ">  
            
            <h1 className='word-wrap' style={{color:"white"}}>Join The To The Future <br/>Team!</h1>
              <h6  style={{color:"white"}} className='word-wrap'>Innovate with the latest and greatest<br/> technologies & get to work on some of the <br/>coolest projects you can imagine.</h6>
              <br/>  <button style={{color:"white"}} className='apply-now' >Apply Now</button>
<br/><br/><br/>

              {/* <h1 className="font-primary font-bold text-center">CAREER</h1> */}
           <span style={{color:"white"}} >  It takes a special kind of person to stand with us on our platform
              of abundance. Our mission and our way of being drives everything
              we do. We want people to live their fullest potential while
              serving our clients and communities. Careers at To The Future
              offer personal and professional development as well as traditional
              benefits.
              </span> 
            
            </div>
          


            <div className="sm:col-12  md:col-12 lg:col-6 flex-right">
              <Image
                className=""
                src={frontmatter.careerimg.image}
                alt="careerimg image"
                width={600}
                height={300}
              />
            </div>
          </div>

          <div className='mt-12 text-center'>
            <h1>What Makes Us Different?</h1>
            We are committed to Creating Abundance
          </div>

          <div className="col-12 mt-20">
          <div className='row flexx '>
            <div className='sm:col-12  md:col-12 lg:col-6'>
              <Image
                className=""
                src={frontmatter.investing.image}
                alt="investing image"
                width={600}
                height={300}
              />
            </div>
            <div className='sm:col-12 md:col-12 lg:col-6'>
            <h3>We invest in the ongoing development and success of our employees.</h3>
            As knowledge experts, as leaders, and as human beings. We are full-time hires that partner closely with clients to deliver long-term software services.
            
            </div>
</div>
          </div>


          <div className="col-12 mt-20">
          <div className='row flexxx '>
            
            <div className='sm:col-12 md:col-12 lg:col-6'>
            <h3> We attract talent that has a passion for learning.</h3>
Our engineers have opportunities to learn new technologies, work in different verticals within the industry, and play different roles throughout their career.            
            </div>
            <div className='sm:col-12  md:col-12 lg:col-6 flex-right'>
              <Image
                className="img-third"
                src={frontmatter.second.image}
                alt="investing image"
                width={600}
                height={300}
              />
            </div>
</div>
          </div>


          <div className="col-12 mt-20">
          <div className='row flexx '>
            <div className='sm:col-12  md:col-12 lg:col-6'>
          

              <Image
                // className="object-fit"
                className='img-third'
                src={frontmatter.third.image}
                alt="third image"
                width={600}
                height={300}
              />
            
            </div>
            <div className='sm:col-12 md:col-12 lg:col-6'>
            <h3>We say what we do and do what we say.</h3>
            We emphasize how and why we work just as much as we focus on what we do.
             It’s not enough to be competent. Our employees exhibit and are committed to cultivating both character and competence.            
            </div>
</div>
          </div>


          <div className="col-12 mt-20 mb-10">
          <div className='row flexxx '>
            
            <div className='sm:col-12 md:col-12 lg:col-6'>
            <h3> We offer four distinct working models.</h3>
            To The Future uses onshore, offshore, near-shore, and blended resource teams to deliver on our partners' technological requirements.

</div>
            <div className='sm:col-12  md:col-12 lg:col-6 flex-right'>
              <Image
                className="img-third"
                src={frontmatter.four.image}
                alt="investing image"
                width={600}
                height={300}
              />
            </div>
</div>
          </div>










        </div>

      </div>




      <div className='bg-color'>
      <h1 className='text-center mt-12' style={{color:"white"}}>What we value</h1>

      <div className='flexx mt-12 mb-20'>

      <div className='bg-whiteee m-5'>

      <div className='centerimgg mt-10'>
<Image
                className=""
                src={frontmatter.trust.image}
                alt="trust image"
                width={100}
                height={100}
              />
              </div>
              <div className='text-center mt-10 p-1'>
                <h3 className=''>Trust</h3>
                  Be authentic, realistic, and practice principles of high character and competence.
              </div>
      </div>

      <div className='bg-whiteee m-5'>

<div className='centerimgg mt-10'>
<Image
          className=""
          src={frontmatter.trans.image}
          alt="trust image"
          width={100}
          height={100}
        />
        </div>
        <div className='text-center mt-10 p-2'>
          <h3 className=''>Transparency</h3>
          Consistently committed to being open and honest.        </div>
</div>
  <div className='bg-whiteee m-5'>

<div className='centerimgg mt-10'>
<Image
          className=""
          src={frontmatter.integrity.image}
          alt="trust image"
          width={100}
          height={100}
        />
        </div>
        <div className='text-center mt-10 p-2'>
          <h3 className=''>Integrity
</h3>
Say what you do and do what you say. Be honest in motive, method, progress, and principles.

</div>
</div>
  <div className='bg-whiteee m-5'>

<div className='centerimgg mt-10'>
<Image
          className=""
          src={frontmatter.leadership.image}
          alt="trust image"
          width={100}
          height={100}
        />
        </div>
        <div className='text-center mt-10 p-2'>
          <h3 className=''>Leadership
</h3>
Inspire others to dream more, learn more, do more, and become more.

</div>
</div>
   

      </div>

    </div>
    



    </Base>
  )
}

export const getStaticProps = async () => {
  const homePage = await getListPage('content/_index.md')
  const { frontmatter } = homePage
  return {
    props: {
      frontmatter,
    },
  }
}
export default notFound
