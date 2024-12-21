let customers = [];
let products = [];

// Clientes
export const addCustomer = (name, email) => {
    customers.push({ name, email });
};

export const getCustomers = () => customers;

export const deleteAllCustomers = () => {
    customers.length = 0; // Vaciar la lista sin reasignar
};

export const updateCustomer = (index, name, email) => {
    if (customers[index]) {
        customers[index].name = name;
        customers[index].email = email;
    }
};

// Productos
export const addProduct = (name, price, stock) => {
    products.push({ name, price, stock });
};

export const getProducts = () => products;

export const deleteAllProducts = () => {
    products.length = 0; // Vaciar la lista sin reasignar
};

export const updateProduct = (index, name, price, stock) => {
    if (products[index]) {
        products[index].name = name;
        products[index].price = price;
        products[index].stock = stock;
    }
};
