// src/components/DashboardPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define stock options with correct price formatting
const stockOptions = [
    { symbol: 'RURU', price: '832.70' },
    { symbol: 'CHDC', price: '1,948.10' },
    { symbol: 'SMJC', price: '551.10' },
    { symbol: 'KBSH', price: '2,049.70' },
    { symbol: 'BGWT', price: '1,064.80' },
    { symbol: 'MMKJL', price: '606.10' },
    { symbol: 'VLUCL', price: '680.90' },
    { symbol: 'MKCL', price: '1,782.00' },
    { symbol: 'CITY', price: '1,062.30' },
    { symbol: 'MHNL', price: '313.30' }
];

export default function DashboardPage() {
    const [selectedStock, setSelectedStock] = useState('');
    const [targetPrice, setTargetPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected Stock: ${selectedStock}\nTarget Price: ${targetPrice}`);
    };

    return (
        <div className='container text-center bg-light p-5 mt-3 col-md-6 rounded shadow'>
            <h1 className='text-primary mb-4'>Stock Dashboard</h1>
            <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-sm'>
                <div className='mb-4'>
                    <label className='form-label fs-4 fw-bold text-secondary'>Stock Name</label>
                    <select
                        className='form-select form-select-lg'
                        value={selectedStock}
                        onChange={(e) => setSelectedStock(e.target.value)}
                        required
                    >
                        <option value='' disabled>Select a stock</option>
                        {stockOptions.map((stock) => (
                            <option key={stock.symbol} value={stock.symbol}>
                                {stock.symbol} - {stock.price}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='form-label fs-4 fw-bold text-secondary'>Target Price</label>
                    <input
                        type='number'
                        className='form-control form-control-lg'
                        value={targetPrice}
                        onChange={(e) => setTargetPrice(e.target.value)}
                        placeholder='Enter target price'
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-lg w-100'>Submit</button>
            </form>
        </div>
    );
}
