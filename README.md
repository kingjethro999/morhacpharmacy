# Morhac Pharmacy & Stores

A modern React.js application with Vite and PHP backend for Morhac Pharmacy and Supermarket.

## Features

- **React.js with Vite** - Fast development and build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PHP Backend** - RESTful API endpoints
- **MySQL Database** - Data storage
- **Responsive Design** - Mobile-first approach
- **Product Catalog** - Browse medications, supplements, equipment, and grocery items
- **Prescription Refills** - Online prescription refill requests
- **Contact Forms** - Customer inquiries and feedback
- **User Authentication** - Login and signup functionality

## Prerequisites

- Node.js (v16 or higher)
- PHP (v7.4 or higher)
- MySQL/MariaDB
- XAMPP/WAMP/MAMP (recommended for local development)

## Installation

### 1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd morhac-pharmacy
\`\`\`

### 2. Install frontend dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Set up the database
1. Start your MySQL server (XAMPP/WAMP/MAMP)
2. Create a new database named `morhac_db`
3. Import the SQL file:
\`\`\`bash
mysql -u root -p morhac_db < backend/database.sql
\`\`\`

### 4. Configure the backend
1. Copy the `backend` folder to your web server directory (e.g., `htdocs` for XAMPP)
2. Update database credentials in `backend/config/database.php` if needed

### 5. Add product images
Create a `public/images` folder and add the following images:
- `pharm-amorha.png` - Pharmacist photo
- `morhac-storefront.jpg` - Store front image
- `paracetamol.jpg` - Paracetamol product image
- `ibuprofen.jpg` - Ibuprofen product image
- `vitamin-c.jpg` - Vitamin C product image
- `wellkid-multivitamin.jpg` - Multivitamin product image
- `aneroid-sphygmomanometer.jpg` - Blood pressure monitor image
- `infrared-thermometer.jpg` - Thermometer image
- `glucose.jpg` - Glucose D product image
- `wine.jpg` - Non-alcoholic wine image
- `body-spray.jpg` - Body spray set image
- `mentos.png` - Mentos candy image
- `toothpaste.png` - Colgate toothpaste image
- `milo.jpg` - Milo drink mix image

## Development

### Start the frontend development server
\`\`\`bash
npm run dev
\`\`\`
The application will be available at `http://localhost:5173`

### Start the PHP backend server
If using XAMPP/WAMP/MAMP, ensure Apache and MySQL are running.

For standalone PHP server:
\`\`\`bash
cd backend
php -S localhost:8000
\`\`\`

## Project Structure

\`\`\`
morhac-pharmacy/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Prescriptions.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── config/
│   │   └── database.php
│   ├── products.php
│   ├── prescriptions.php
│   ├── contact.php
│   └── database.sql
├── public/
│   └── images/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
\`\`\`

## API Endpoints

### Products
- `GET /api/products.php` - Get all products
- `GET /api/products.php?category=medication` - Get products by category
- `GET /api/products.php?id=1` - Get specific product
- `POST /api/products.php` - Add new product

### Prescriptions
- `GET /api/prescriptions.php` - Get all prescription requests
- `POST /api/prescriptions.php` - Submit prescription refill request

### Contact
- `POST /api/contact.php` - Submit contact form

## Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` folder. Deploy these files to your web server along with the PHP backend.

## Technologies Used

- **Frontend**: React.js, Vite, React Router, Tailwind CSS, Lucide React
- **Backend**: PHP, MySQL
- **Development**: Node.js, npm

## License

This project is licensed under the MIT License.
