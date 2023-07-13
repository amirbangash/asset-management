import React, { useEffect } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAssets } from '../../../store/asset/action';

const ProductPerformance = () => {

    const dispatch = useDispatch()
    const { assetData, Products } = useSelector(state => state?.asset)
    console.log("🚀 ~ file: ProductPerformance.js:19 ~ ProductPerformance ~ Products:", Products)
    console.log("🚀 ~ file: ProductPerformance.js:19 ~ ProductPerformance ~ Products:", !!Products.length)
    useEffect(() => {
        dispatch(getAllAssets())
    }, [assetData])


    return (
        !!Products?.length ?
            <DashboardCard title="Product Detail">
                <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                    <Table
                        aria-label="simple table"
                        sx={{
                            whiteSpace: "nowrap",
                            mt: 2
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Id
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Product
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Make
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Status
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Budget
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Products?.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {index + 1}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="subtitle2" fontWeight={600}>
                                                    {product.name}
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    sx={{
                                                        fontSize: "13px",
                                                    }}
                                                >
                                                    {product.itemDescription}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {product.make}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            sx={{
                                                px: "4px",
                                                backgroundColor: product.inStock ? 'success.main' : 'error',
                                                color: "#fff",
                                            }}
                                            size="small"
                                            label={product.inStock ? 'In Use' : 'Not Assigned'}
                                        ></Chip>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="h6">{product.price}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </DashboardCard>
            : <DashboardCard>
                <Typography variant='h5' align='center'>No assets found !</Typography>
            </DashboardCard>
    );
};

export default ProductPerformance;
