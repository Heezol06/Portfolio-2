import React from 'react';
import banner from "../../../../asset/Nest/banner.png"
import homeProduct from "../../../../asset/Nest/home-product.png"
import nestedRoute from "../../../../asset/Nest/nested.route.png"
import Product from "../../../../asset/Nest/product.png"
import Product1 from "../../../../asset/Nest/product-2.png"
import about1 from "../../../../asset/Nest/aboutus.png"
import about2 from "../../../../asset/Nest/about0.png"
import about3 from "../../../../asset/Nest/about-1.png"
import contact from "../../../../asset/Nest/contact.png"
import dashboard from "../../../../asset/Nest/dashboard.png"
import { Carousel } from 'react-responsive-carousel';

const Nest = () => {
    return (
        <div>
      <div className="mx-auto w-[90%] my-10">
        {/* carousal */}
        <div className="flex justify-center">
          <Carousel>
            <div>
              <img src={banner} alt="" />
              <p className="legend">Home Screen Banner</p>
            </div>
            <div>
              <img src={homeProduct} alt="" />
              <p className="legend">Products Home</p>
            </div>
            <div>
              <img src={nestedRoute} alt="" />
              <p className="legend">Nested Route Product Page</p>
            </div>
            <div>
              <img src={Product} alt="" />
              <p className="legend">Product Recipe</p>
            </div>
            <div>
              <img src={Product1} alt="" />
              <p className="legend">Product Packet Food</p>
            </div>
            <div>
              <img src={about1} alt="" />
              <p className="legend">About Page</p>
            </div>
            <div>
              <img src={about2} alt="" />
              <p className="legend">About Page</p>
            </div>
            <div>
              <img src={about3} alt="" />
              <p className="legend">About Page</p>
            </div>
            <div>
              <img src={contact} alt="" />
              <p className="legend">Contact Page</p>
            </div>
            <div>
              <img src={dashboard} alt="" />
              <p className="legend">Dashboard Home</p>
            </div>
          </Carousel>
        </div>
        {/* site descriptions  */}
        <div className="text-white">
          <h1 className="text-5xl text-white my-10 font-bold">
            Project Description
          </h1>
          <h1 className="text-3xl leading-10 underline hover:underline-offset-1">
            Nest
          </h1>
          <p
            className="leading-10 text-gray-300"
            style={{ fontFamily: "Poppins" }}
          >
            From 10th Nov, 2021 - 13th nov, 2021.
          </p>
          <h1 className="text-xl my-7" style={{ fontFamily: "Poppins" }}>
          This is a E-commerce website. You can add to your cart any kind of products from our site. This site is base on Javascript, React, Node js, Express, MongoDB, chartJS, Css, html5 this is an responsive and smooth site you can use is very easily. This is very handy there have many info about our products. This site is very fast to render.
          </h1>
          <h1 className="text-4xl leading-10 underline hover:underline-offset-1 font-bold">
            Project Link
          </h1>
          <div className="my-5">
            <a
              href="https://team-project-003.web.app/"
              target="_blank"
              rel="noreferrer"
              class="btn btn-active btn-accent mr-5 btn-sm"
            >
              Live Site
            </a>
            <a
              href="https://github.com/alve-coderx/MERN-Stack-E-Commerce"
              target="_blank"
              rel="noreferrer"
              class="btn btn-active btn-accent btn-sm"
            >
              Client Side Repository
            </a>
          </div>
          <div>
            <h1 className="text-4xl underline hover:underline-offset-1 font-bold">
              Tools and Technologies
            </h1>
            <ul
              className="list-disc pl-5 p-4"
              style={{ fontFamily: "Poppins" }}
            >
              <li>Bootstrap CSS framework.</li>
              <li>ReactJS as JavaScript library.</li>
              <li>React-Router npm package for Single Page Application.</li>
              <li>Google Firebase for authentication.</li>
              <li>Hosting this application in firebase.</li>
              <li>React-firebase-hook npm for easy firebase authentication.</li>
              <li>React Count Up</li>
              <li>Stripe - Payment gateway.</li>
              <li>Node JS - Javascript runtime.</li>
              <li>Express JS - Web framework for Node JS.</li>
              <li>MongoDB - Database management.</li>
              <li>Cross-Origin Resource Sharing (CORS) - Middleware.</li>
              <li>dotenv - Loads environment variables.</li>
              <li>Strip - Payment gateway API.</li>
            </ul>
          </div>
          <div>
            <h1 className="text-4xl underline hover:underline-offset-1 font-bold">
              About and Features of the Website
            </h1>
            <ul
              className="list-disc pl-5 p-4"
              style={{ fontFamily: "Poppins" }}
            >
              <li className="my-5">
                Home page - On this website, there is a minimal banner. At the
                top, there is a navigation bar, where you can change routes.
                After the banner, you'll see a business summary of the company.
                Then you can see the Best Selling Products of the company. After
                that, there's a section where they explained their worldwide
                delivery system. If scroll down a little you can see some
                customer reviews. Then they answered some Frequently Asked
                Questions and lastly, you can see an interactive footer with
                full of information.
              </li>
              <li className="my-5">
                Product page - In This route, is shows all of the manufactured
                products of this company. You can order any products from this
                route. If you want to order something, you've to click on the
                "ORDER NOW" button. After clicking the button it will navigate
                to the purchase page if you're logged in. You can't access the
                purchase page without login information. Because it is an
                authentication-protected route. If you're not logged in and
                still try to order something, after clicking the "ORDER NOW"
                button it will navigate to the login page. After completing the
                login process it will navigate to the purchase page.
              </li>
              <li className="my-5">
                Review Page - The review page has the customer reviews. If any
                customer gives a review of a service they provided, the review
                will show up on the review page.
              </li>
              <li className="my-5">
                Blogs Page - The Blogs page has some blogs about programming
                related. There are a few questions and answerers.
              </li>
              <li className="my-5">
                My Portfolio Page - On the My Portfolio page, there is some
                information about the developer of this website.
              </li>
              <li className="my-5">
                Dashboard Page - The Dashboard page is a little different for
                normal users and admins. If a normal user opens the dashboard
                page they will notice there are 3 options. The options are My
                Orders, Add a Review, and My Profile. On the My Order page, they
                will see all of the orders they placed. If they want that order
                they can pay for it or if they want to delete the ordered
                product they can delete it. Users can delete those products
                which are not paid for. People can pay for their order by
                clicking on the "Pay" button. After clicking the play button
                system will navigate that person to the payment route. On that
                route, they can pay by card. After payment, they will receive a
                transaction. If they returned to my order page they will see
                their ordered product history by clicking the "DETAILS" button.
                After that, the "Add a Review" page comes. On the Add, a Review
                page users can share the experience with the company and publish
                it to the review section. The last option is "My Profile". On
                this page, people can update their profiles and add social
                links. These were for normal users. Here comes the admin users.
                If a person login as Admin, they will also see the Dashboard
                route but in their dashboard, they will see 5 options. The
                options are Manage Orders, Add a Product, Manage Products, All
                Users, and My Profile. On the Manage Orders page, an admin can
                see all the orders from customers. If the admin wants they can
                refuse the order or proceed with the order process. In The Add a
                Product page an admin can add a new product to the DataBase.
                After that, in the Manage Product route, an admin can manage all
                the products of their DataBase. They can delete a product,
                update the full information of a product, and update and update
                the quantity of the product. The All Users page has the all
                information of normal users and admin users. An admin can make
                another person admin or they can remove a user. In the My
                Profile section, admins can also update and add their social
                links.
              </li>
              <li className="my-5">
                Login Page - The last route is the login page. In that route,
                people can log in by email and password. People also can log in
                with google. If someone doesn't remember the password, they can
                reset the password by clicking "Forget password?". A user can
                also create an account with a name, email, and password or they
                can use google authentication for creating a new account.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Nest;