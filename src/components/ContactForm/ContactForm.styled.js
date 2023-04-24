import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 8px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  svg {
    margin-right: 8px;
  }
`;

export const FormBox = styled.div`
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  font-weight: 500;
  width: 100%;
  padding: 10px;
  color: ${p => p.theme.colors.blackColor};
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: ${p => p.theme.borderRadius};

  svg {
    margin-right: 8px;
  }
`;