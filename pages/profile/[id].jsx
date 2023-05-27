import Profile from "@/components/Profile";
import { getProfileByUserId } from "@/services/ProfileService";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ProfileStyled = styled.section`
  margin: 0 2em;
`;
export const getServerSideProps = async (context) => {
  return { props: { paramsId: context.params.id } };
};
export default function ProfilePage(props) {
  const [dataProfile, setDataProfile] = useState({})
  useEffect(() => {
    const data = getProfileByUserId(props.paramsId).then((res) => {
      return setDataProfile(res);;
    });
  }, [])
  return (
    <ProfileStyled>
      <Profile data={dataProfile}></Profile>
    </ProfileStyled>
  );
}
