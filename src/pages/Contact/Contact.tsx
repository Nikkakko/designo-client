import styled from 'styled-components';
import { LocationCard } from '../../components/location';
import {
  AboutHeroMobile,
  AustraliaLocation,
  CanadaLocation,
  UkLocation,
  DealMobile,
  WorldTalentMobile,
} from '../../assets';
import { InputField } from '../../components';
import { Button } from '../../components/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { device } from '../../mediaQueries';

type InputValue = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<InputValue> = async data => {
    console.log(data);

    reset();
  };

  return (
    <Wrapper>
      <Container>
        <ContactWrapper>
          <TextWrapper>
            <ContactHeader>Contact Us</ContactHeader>
            <ContactText>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </ContactText>
          </TextWrapper>

          <InputForm onSubmit={handleSubmit(onSubmit)}>
            <InputField
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Wrong format',
                },
              })}
              placeholder='Name'
              error={errors.name?.message}
            />

            <InputField
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Wrong format',
                },
              })}
              placeholder='Email'
              error={errors.email?.message}
            />

            <InputField
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
                  message: 'Wrong format',
                },
              })}
              placeholder='Phone'
              error={errors.phone?.message}
            />

            <InputField
              {...register('message', {
                required: 'Message is required',
              })}
              placeholder='Message'
              error={errors.message?.message}
            />

            <ButtonWrapper>
              <Button
                text='Submit'
                type='submit'
                radius='8px'
                bgColor='var(--light)'
                textColor='var(--darkText)'
                submitType
                hoverColor='#FFAD9B'
              />
            </ButtonWrapper>
          </InputForm>
        </ContactWrapper>
      </Container>
      <LocationWrapper>
        <LocationCard
          location='Canada'
          image={CanadaLocation}
          link='/location'
        />
        <LocationCard
          location='Australia'
          image={AustraliaLocation}
          link='/location'
        />
        <LocationCard
          location='United Kingdom'
          image={UkLocation}
          link='/location'
        />
      </LocationWrapper>
    </Wrapper>
  );
};

const Container = styled.div`
  background: var(--tColor);
  color: var(--light);
  padding: 72px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    border-radius: 15px;
    padding: 71px 58px;
  }

  @media ${device.laptop} {
  }
`;

const Wrapper = styled.div`
  @media ${device.tablet} {
    padding: 0 39px;
  }

  @media ${device.laptop} {
    padding: 0 165px;
  }
`;

const ContactWrapper = styled.div`
  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    display: flex;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 48px;
  width: 100%;

  @media ${device.tablet} {
    align-items: flex-end;
  }

  @media ${device.laptopL} {
    margin-top: 0;
  }
`;

const LocationWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 48px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    button {
      margin-top: 0;
    }
  }
`;

const ContactHeader = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */

  text-align: center;

  color: #ffffff;

  @media ${device.tablet} {
    font-size: 48px;
    line-height: 48px;
    text-align: start;
  }
`;

const ContactText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #ffffff;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 26px;
    text-align: start;

    margin-top: 32px;
  }

  @media ${device.laptopL} {
    /* margin-top: 0; */
    padding: 0 150px 0 0;
  }
`;

export default Contact;
