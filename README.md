# ERP Dashboard (live)[https://erp-dashboard-eta.vercel.app]

This is a Vite-based React app for an ERP dashboard.

## Features

- **Product Crud**: Allows for CRUD operations on products.
- **Responsive Sheet**: Provides a responsive design for easy use on different devices.
- **Deployment**: Deployment has been set up for easy deployment of the app.

### Dashboard

- **Summary Cards**: Displays summary information in a visually appealing format.
- **Reset DB + Add_creation_time + Delivery_date**: Functionality to reset the database and add creation time and delivery date.
- **Low Inventory**: Alerts for low inventory.
- **Upcoming Deliveries**: Displays information about upcoming deliveries.
- **Chart of Daily Orders**: Shows a chart of daily orders with the ability to change time slots and add dropdowns to orders/products.
- **Pie Chart of Total Order**: Shows a pie chart of total orders, including those rejected, pending, and placed.

### Calendar

- Calendar functionality is included.



## Getting Started

1. Clone the repository.

    ```bash
    git clone https://github.com/mohitkumar0606/erp-dashboard.git
    ```

2. Install dependencies with
    ```bash
    cd erp-dashboard
    npm install
    ```
3. Start the development server with `npm run dev`.
4. Build the project for production with `npm run build`.


### App walkthrough
1. This is the dashboard where you can find all the things:
   Total No.of Product, Category, Order Related(new order,rejected, total order),
   pictorial view of orders through Pie Chart, Line Chart and the 
   upcoming order delivery date through calendar.
   
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/eca4e7f3-3087-48c1-93cc-78ab84b4ebd2)
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/99149645-703b-44d2-924c-0ab806b9c7a2)


2. This is the Product Management Part:
   Here you can find out the list of products and
   you can also do the crud operations i.e, adding new product and removing any product.
   
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/e85500c3-6015-4790-97bb-68f2263347e6)
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/b3d311cb-91ea-4f8c-98ca-aef9e749be7b)


3. This is the Order Management Part:
   Here you can find out the list of items ordered i.e, either they are placed or rejected.
   And also you can add any new order.
   
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/027f6ea6-ba85-499d-b127-e9132f4a1ce3)
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/90fa8fda-1025-488a-8753-e16488913b42)

4. Calendar:
   It will show the date of upcoming orders on calendar.
   
![image](https://github.com/mohitkumar0606/erp-dashboard/assets/100067909/ec1bfcf9-bc21-45b8-b5f0-de1ca978533b)


## Technologies Used

- React
- Vite
- Other technologies as required for specific features
