import * as Yup from 'yup'

export const createAssetSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    make: Yup.string().required('Required'),
    itemDescription: Yup.string().required('Required'),
    purchasedDate: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    paymentMethod: Yup.string().required('Required'),
    productLife: Yup.string().required('Required'),
    dateOfIssuance: Yup.string().required('Required'),
    dateOfReturn: Yup.string().required('Required'),
})