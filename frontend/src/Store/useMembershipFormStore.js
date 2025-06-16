import { create } from 'zustand';

const useMembershipFormStore = create((set) => ({
  formData: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    idType: '',
    idNumber: '',
    shares: '',
    savings: '',
    qualification: '',
    physicalAddress: '',
    postalAddress: '',
    inviterName: '',

    beneficiary: {
      firstName: '',
      lastName: '',
      idNumber: '',
      relationship: '',
      phone: '',
      email: '',
    },
  },

  updateFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),

  updateBeneficiary: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        beneficiary: {
          ...state.formData.beneficiary,
          ...data,
        },
      },
    })),
}));

export default useMembershipFormStore;
