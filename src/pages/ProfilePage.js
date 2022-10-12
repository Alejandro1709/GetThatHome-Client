import { colors } from '../styles';
import EditProfileForm from '../components/EditProfileForm';
import styled from '@emotion/styled';

const StyledProfilePage = styled.div`
  min-height: inherit;
`;

const StyledHeader = styled.header`
  height: 22rem;
  background-color: ${colors.primary[100]};
`;

function ProfilePage() {
  return (
    <StyledProfilePage>
      <StyledHeader>
        <EditProfileForm />
      </StyledHeader>
    </StyledProfilePage>
  );
}

export default ProfilePage;
