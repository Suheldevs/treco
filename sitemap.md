# Treco India Website Redesign Requirements

**Reference Website:** [https://treco.in](https://treco.in)

---

## 1. Logo  
- High-resolution company logo (in `.png`, or `.webp` formats)  
- Favicon (32x32) for browser tab  

---

## 2. Contact Information  
- Phone Number  
- Email Address  
- Registered Office Address  
- Google Maps Integration  

---

## 3. Social Media Integration Links  
- Facebook  
- X (Twitter)  
- LinkedIn  
- WhatsApp number (click-to-chat enabled)  
- YouTube (if available)  
- Instagram (if applicable)  
- Any other platform  

---

## 4. Product Details (Essential)
Each product must have: 
- At least **1 high-quality image**  
- **Title**  
- **Category** (e.g., Home Automation, Lighting Automation, etc.)  
- **Sub-category** (e.g., Touch Switches, Sensors, etc.)  
- **Brief Description**  
- **Key Features** (bullet points – *optional*)  
- **Price** (if applicable or “Contact for Price”) 
> This section defines the product schema structure. Please confirm which fields are mandatory and share any additional optional fields, specific categories, subcategories, or product-specific details that should be included
---

## 5. Banner/Slider Images  
- High-resolution banner image for **each major product category**  
- **Recommended Size:** `1920x1080px`  

---

## Existing Content Confirmation  

> “All the details such as contact information, product details, and banners are available on the current website ([treco.in](https://treco.in)). Should I use the existing content, or do you prefer we update or replace it? If changes are needed, please provide the updated details or let me know so I can assist in drafting fresh content.”

## sitemap/stucture

```
Home
├── About Us (static)
├── Home Automation (dynamic)
│ ├── Touch Switches
│ │ └── Product Detail Page
│ └── Sensors
│ └── Product Detail Page
│ └── ...etc
├── Lighting Automation (dynamic)
│ ├── Dimmers
│ │ └── Product Detail Page
│ └── Motion Sensors
│ └── Product Detail Page
│ └── ...etc
├── Audio Visual (dynamic)
│ ├── Controllers
│ │ └── Product Detail Page
│ └── Switchboards
│ └── Product Detail Page
│ └── ...etc
├── Products (dynamic)
│ ├── Category-wise Listing
│ └── Product Detail Page
├── Contact Us (form submission + static contact info)
├── Inquiry Modal (form submission + static contact info)
├── Blog (dynamic)
│ └── Blog Detail Page
├── Privacy Policy & Terms and Conditions (static)
├── Career (form submission + static contact info)
└── Admin Panel (Private)  

```

## Estimated Timeline: 9 – 14 working days

---

### 1. Planning & Setup (1 day)
- Finalize requirements and sitemap  
- Create folder structure (frontend/backend)  
- Set up backend server (Express) & MongoDB connection  
- Set up frontend (React + Tailwind)  

---

### 2. Frontend Development – Phase 1 (2–3 days)
**Home Page**
- Header  
- Hero section  
- About section  
- Services section  
- Products section  
- CTA section  
- Testimonial  
- Footer  

**Other Pages**
- About Us  
- Contact Page (with Map & Form)  
- Privacy Policy  
- Terms & Conditions  
- Career Page (with form submission)  

---

### 3. Frontend Development – Phase 2 (2–3 days)
- Home Automation Page  
- Lighting Automation Page  
- Audio Visual Page  
- Product Page  
- Product Detail Page 1  
- Product Detail Page 2  
- Blog Pages  
- Blog Detail Page  
- Inquiry Modal  

---

### 4. Backend Development (1–2 days)
- Admin Authentication (JWT)  
- Product categories/subcategories/product uploads  
- Blog management  
- Career form submissions  
- Contact form submissions  
- Image upload handling  

---

### 5. Admin Panel Features (1–2 days)
- Login functionality   
**Add/Edit/Delete for:**
- Dashboard summary  
- Products  
- Blogs  
- Career Applications (view-only)  

---

### 6. Responsive Design (1 day)
- Ensure all pages are fully responsive across devices  

---

### 7. Testing & Deployment (1–2 days)
- Test all functionalities  
- SEO tags, metadata, sitemap, robots.txt  
- Deploy frontend  
- Deploy backend  
- DB deployment

