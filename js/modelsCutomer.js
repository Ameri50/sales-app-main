let customers = [];

export const addCustomer = (name, email) => {
    customers.push({ name, email });
};

export const getCustomers = () => {
    return customers;
};

export const deleteAllCustomers = () => {
    // Elimina todos los clientes
    customers = [];
};

export const updateCustomer = (index, name, email) => {
    if (customers[index]) {
        customers[index].name = name;
        customers[index].email = email;
    }
};