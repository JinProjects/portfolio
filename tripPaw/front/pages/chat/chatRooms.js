import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';

const RoomListContainer = styled.div`
  max-width: 600px;
  margin: 60px auto;
  background-color: #fff;
  border: 1px solid #dbdbdb; /* 인스타그램 테두리 색상 */
  border-radius: 8px; /* 둥근 모서리 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.25em; /* 20px */
  font-weight: 600;
  margin: 0;
  color: #262626;
`;

const Content = styled.div`
  padding: 20px;
`;

const SubHeading = styled.h3`
  font-size: 1em; /* 16px */
  font-weight: 600;
  color: #8e8e8e;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: left;
`;

const CreateRoomForm = styled.form`
  display: flex;
  gap: 10px; /* 입력창과 버튼 사이 간격 */
  margin-bottom: 30px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: #fafafa;
  font-size: 0.9em; /* 14px */

  &:focus {
    outline: none;
    border-color: #a8a8a8;
  }
`;

const Button = styled.button`
  background-color: #0095f6; /* 인스타그램 파란색 버튼 */
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0077c6;
  }
`;

const RoomUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RoomLi = styled.li`
  /* RoomLink 안으로 스타일 이동하여 링크 영역 전체 클릭 가능하도록 함 */
`;

// Link 컴포넌트를 스타일링
const RoomLink = styled(Link)`
  display: block;
  padding: 16px;
  text-decoration: none;
  color: #262626;
  font-weight: 500;
  border-bottom: 1px solid #efefef;
  transition: background-color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
  }
`;

function ChatRoomList() {
  const [rooms, setRooms] = useState([]);
  const [newRoomTitle, setNewRoomTitle] = useState('');

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost:8080/chat/rooms');
      setRooms(response.data);
    } catch (error) {
      console.error('채팅방 목록을 불러오는 데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleCreateRoom = async (event) => {
    event.preventDefault();
    if (!newRoomTitle.trim()) {
      alert('채팅방 이름을 입력해주세요.');
      return;
    }
    try {
      // API 요청 시 JSON 형식 명시
      await axios.post(
        'http://localhost:8080/chat/rooms',
        { title: newRoomTitle },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setNewRoomTitle('');
      fetchRooms(); // 목록 새로고침
    } catch (error) {
      console.error('채팅방 생성에 실패했습니다:', error);
      alert('채팅방 생성에 실패했습니다.');
    }
  };

  return (
    <RoomListContainer>
      <Header>
        <Title>채팅</Title>
      </Header>
      <Content>
        <SubHeading>새 채팅방 만들기</SubHeading>
        <CreateRoomForm onSubmit={handleCreateRoom}>
          <Input
            type="text"
            id="roomName"
            placeholder="채팅방 이름을 입력하세요"
            value={newRoomTitle}
            onChange={(e) => setNewRoomTitle(e.target.value)}
            required
          />
          <Button type="submit">만들기</Button>
        </CreateRoomForm>

        <SubHeading>참여 가능한 채팅방</SubHeading>
        <RoomUl>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <RoomLi key={room.id}>
                <RoomLink href={`/chat/chatRoom/${room.id}`} passHref>
                  {room.title}
                </RoomLink>
              </RoomLi>
            ))
          ) : (
            <RoomLi>
              <div style={{ padding: '16px', color: '#8e8e8e' }}>
                참여 가능한 채팅방이 없습니다.
              </div>
            </RoomLi>
          )}
        </RoomUl>
      </Content>
    </RoomListContainer>
  );
}

export default ChatRoomList;