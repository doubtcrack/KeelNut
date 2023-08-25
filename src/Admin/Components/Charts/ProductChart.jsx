import { Container } from '@mui/material';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
const RADIAN = Math.PI / 175;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const ProductChart = ({ products, review, cart, wishlist, paymentData }) => {

    const productData = [
        {
            name: "Fasteners",
            Quantity: products.filter(prod => prod.type === "Fasteners").length
        },
        {
            name: "Connectors",
            Quantity: products.filter(prod => prod.type === "Connectors").length
        },
        {
            name: "Brackets",
            Quantity: products.filter(prod => prod.type === "Brackets").length
        },
        {
            name: "Hinges",
            Quantity: products.filter(prod => prod.type === "Hinges").length
        },
        {
            name: "Hooks",
            Quantity: products.filter(prod => prod.type === "Hooks").length
        },
        {
            name: "Braces",
            Quantity: products.filter(prod => prod.type === "Braces").length
        },
        {
            name: "Adhesive",
            Quantity: products.filter(prod => prod.type === "Adhesive").length
        },
        {
            name: "Clamps",
            Quantity: products.filter(prod => prod.type === "Clamps").length
        },
    ];
    const reviewData = [
        {
            name: "One ⭐",
            Reviews: review.filter(prod => Math.round(prod.rating) === 1).length,
        },
        {
            name: "Two ⭐",
            Reviews: review.filter(prod => Math.round(prod.rating) === 2).length,
        },
        {
            name: "Three ⭐",
            Reviews: review.filter(prod => Math.round(prod.rating) === 3).length,
        },
        {
            name: "Four ⭐",
            Reviews: review.filter(prod => Math.round(prod.rating) === 4).length,
        },
        {
            name: "Five ⭐",
            Reviews: review.filter(prod => Math.round(prod.rating) === 5).length,
        },
    ];

    const cartData = [
        {
            name: "Fasteners",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Fasteners").length
        },
        {
            name: "Connectors",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Connectors").length
        },
        {
            name: "Brackets",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Brackets").length
        },
        {
            name: "Hinges",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Hinges").length
        },
        {
            name: "Hooks",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Hooks").length
        },
        {
            name: "Braces",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Braces").length
        },
        {
            name: "Adhesive",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Adhesive").length
        },
        {
            name: "Clamps",
            "Quantity in cart": cart.filter(prod => prod.productId.type === "Clamps").length
        },
    ];

    const wishlistData = [
        {
            name: "Fasteners",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Fasteners").length
        },
        {
            name: "Connectors",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Connectors").length
        },
        {
            name: "Brackets",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Brackets").length
        },
        {
            name: "Hinges",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Hinges").length
        },
        {
            name: "Hooks",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Hooks").length
        },
        {
            name: "Braces",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Braces").length
        },
        {
            name: "Adhesive",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Adhesive").length
        },
        {
            name: "Clamps",
            "Quantity in wishlist": wishlist.filter(prod => prod.productId.type === "Clamps").length
        },
    ];

    const groupedData = paymentData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .reduce((acc, item) => {
            const month = item.createdAt.substr(0, 7); 
            const index = acc.findIndex((el) => el.month === month); 
            if (index !== -1) {
                acc[index].totalAmount += item.totalAmount; 
            } else {
                acc.push({ month: month, totalAmount: item.totalAmount }); 
            }
            return acc;
        }, []);

    const formatXAxis = (tickItem) => {
        return new Date(tickItem).toLocaleString("default", { month: "short" });
    };


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#8884d8"];
    return (
        <>
            <Container sx={{ marginTop: 5,  }}>
                <h3 style={{ textAlign: "center", margin: "30px 0", color: "#9932CC" }}>Payment</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer >
                        <AreaChart
                            data={groupedData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" tickFormatter={formatXAxis} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="totalAmount"
                                tickFormatter={formatXAxis}
                                stroke="#9932CC"
                                activeDot={{ r: 8 }}
                                fill="#9932CC" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <h3 style={{ textAlign: "center", margin: "20px 0", color: "#8884d8" }}>Products</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer >
                        <BarChart width={150} height={40} data={productData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Quantity" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <h3 style={{ textAlign: "center", margin: "15px 0", color: "#17becf" }}>Users Cart</h3>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
                    <p style={{ color: '#00C49F' }}>Fasteners</p>
                    <p style={{ color: "#00C49F" }}>&#9632;</p>
                    <p style={{ color: '#0088FE' }}>Connectors</p>
                    <p style={{ color: "#0088FE" }}>&#9632;</p>
                    <p style={{ color: '#FF8042' }}>Brackets</p>
                    <p style={{ color: "#FF8042" }}>&#9632;</p>
                    <p style={{ color: '#FFBB28' }}>Hinges</p>
                    <p style={{ color: "#FFBB28" }}>&#9632;</p>
                    <p style={{ color: '#8884d8' }}>Hooks</p>
                    <p style={{ color: "#8884d8" }}>&#9632;</p>
                    <p style={{ color: '#8a1e39' }}>Braces</p>
                    <p style={{ color: "#8a1e39" }}>&#9632;</p>
                    <p style={{ color: '#abc52b' }}>Adhesive</p>
                    <p style={{ color: "#abc52b" }}>&#9632;</p>
                    <p style={{ color: '#d23232' }}>Clamps</p>
                    <p style={{ color: "#d23232" }}>&#9632;</p>
                </div>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <PieChart >
                            <Tooltip />
                            <Pie
                                data={cartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="Quantity in cart"
                            >
                                <Tooltip />
                                {cartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <h3 style={{ textAlign: "center", margin: "30px 0", color: "#e377c2    " }}>Users Wishlist</h3>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer >
                        <BarChart width={730} height={250} data={wishlistData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Quantity in wishlist" fill="#e377c2     " />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <h3 style={{ textAlign: "center", margin: "30px 0", color: "#83a6ed" }}>Reviews</h3>
                <div style={{ width: '100%', height: 400 }}>

                    <ResponsiveContainer>
                        <BarChart width={730} height={250} data={reviewData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Reviews" fill="#83a6ed" />

                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </Container>
        </>
    )
}

export default ProductChart