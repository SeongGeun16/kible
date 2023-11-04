'use client';

import AppBar from '@/components/Layouts/AppBar';
import AppBarTextButton from '@/components/Layouts/AppBar/AppBarTextButton';
import { Button, Container, Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import TableList from '@/components/Layouts/TableList';
import Image from 'next/image';
import styles from './styles';

export default function TestClientPage() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [moveModalOpen, setMoveModalOpen] = useState(false);
  const [waringModalOpen, setWaringModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [waring2ModalOpen, setWaring2ModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const openSubModal = () => {
    setMainModalOpen(false);
    setSubModalOpen(true);
  };

  const closeSubModal = () => {
    setMainModalOpen(true);
    setSubModalOpen(false);
  };
  const openMoveModal = () => {
    setMainModalOpen(false);
    setMoveModalOpen(true);
  };

  const closeMoveModal = () => {
    setMainModalOpen(true);
    setMoveModalOpen(false);
  };
  const openWaringModal = () => {
    setMoveModalOpen(false);
    setWaringModalOpen(true);
  };

  const closeWaringModal = () => {
    setMoveModalOpen(true);
    setWaringModalOpen(false);
  };
  const openShareModal = () => {
    setMainModalOpen(false);
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setMainModalOpen(true);
    setShareModalOpen(false);
  };
  const openWaring2Modal = () => {
    setShareModalOpen(false);
    setWaring2ModalOpen(true);
  };

  const closeWaring2Modal = () => {
    setShareModalOpen(true);
    setWaring2ModalOpen(false);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <Container sx={styles.order}>
      <Container>
        <AppBar>
          <AppBarTextButton
            key='manipulation1'
            onClick={refreshPage}>
            <Image
              src='./images/home.svg'
              width={24}
              height={24}
              priority
              alt='setimg'
            />
          </AppBarTextButton>
          <AppBarTextButton
            key='manipulation2'
            onClick={() => setMainModalOpen(!mainModalOpen)}>
            <Image
              src='./images/setimg.svg'
              width={24}
              height={24}
              priority
              alt='setimg'
            />
          </AppBarTextButton>
        </AppBar>
        <Modal
          sx={styles.testmodal}
          open={mainModalOpen}>
          <Container
            sx={styles.testcon}
            disableGutters>
            <Container
              sx={styles.modaltitle}
              disableGutters>
              <Container
                sx={styles.settitle}
                disableGutters>
                <Container
                  sx={styles.settletext}
                  disableGutters>
                  설정
                </Container>
              </Container>
              <Button
                sx={styles.backb}
                onClick={() => setMainModalOpen(!mainModalOpen)}>
                <Image
                  src='./images/backb.svg'
                  width={24}
                  height={24}
                  priority
                  alt='backb'
                />
              </Button>
            </Container>
            <Container
              sx={styles.btngr}
              disableGutters>
              <Button
                sx={styles.mdbtn}
                onClick={openMoveModal}>
                이 동
              </Button>
              <Button
                sx={styles.mdbtn}
                onClick={openShareModal}>
                합 석
              </Button>
              <Button
                sx={styles.mdbtn}
                onClick={openSubModal}>
                테이블 관리
              </Button>
            </Container>
          </Container>
        </Modal>
        <Modal
          sx={styles.testmodal2}
          open={subModalOpen}>
          <Container sx={styles.testcon2}>
            <Container
              sx={styles.mttitle}
              disableGutters>
              <Container
                sx={styles.mtst}
                disableGutters>
                <Container
                  sx={styles.mtsttext}
                  disableGutters>
                  테이블 관리
                </Container>
              </Container>
              <Button
                sx={styles.backb}
                onClick={closeSubModal}>
                <Image
                  src='./images/backb.svg'
                  width={24}
                  height={24}
                  priority
                  alt='backb'
                />
              </Button>
            </Container>
            <Container
              sx={styles.inputform}
              disableGutters>
              <Container
                sx={styles.ipt}
                disableGutters>
                <Container
                  sx={styles.ipttext}
                  disableGutters>
                  테이블 수를 입력하세요.
                </Container>
              </Container>
              <Container
                sx={styles.outline}
                disableGutters>
                <TextField
                  inputProps={{
                    min: 1,
                    max: 100,
                    // type: 'number',
                    style: {
                      color: '#000',
                      fontFamily: 'Roboto',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.5px',
                    },
                  }}
                  placeholder='테이블 수 입력 (1~100)'
                  fullWidth
                />
              </Container>
            </Container>
            <Container
              sx={styles.tmform}
              disableGutters>
              <Button
                sx={styles.formbtn1}
                onClick={() => setSubModalOpen(!subModalOpen)}>
                <Container sx={styles.fb1name}>저 장</Container>
              </Button>
              <Button sx={styles.initbtn}>
                <Image
                  src='./images/backb.svg'
                  width={24}
                  height={24}
                  priority
                  alt='backb'
                />
              </Button>
            </Container>
          </Container>
        </Modal>
        <Modal
          sx={styles.movemodal}
          open={moveModalOpen}>
          <Container
            sx={styles.modalmove}
            disableGutters>
            <Container
              sx={styles.modaltitle}
              disableGutters>
              <Container
                sx={styles.settitle}
                disableGutters>
                <Container
                  sx={styles.settletext}
                  disableGutters>
                  이동
                </Container>
              </Container>
              <Button
                sx={styles.backb}
                onClick={closeMoveModal}>
                <Image
                  src='./images/backb.svg'
                  width={24}
                  height={24}
                  priority
                  alt='backb'
                />
              </Button>
            </Container>
            <Container
              sx={styles.mvinputform}
              disableGutters>
              <TextField
                sx={styles.mviftext}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                  },
                }}
                placeholder='현재 테이블 번호 입력'
                fullWidth
              />
              <TextField
                sx={styles.mviftext}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                  },
                }}
                placeholder='이동 테이블 번호 입력'
                fullWidth
              />
            </Container>
            <Button
              sx={styles.movesave}
              onClick={openWaringModal}>
              <Container
                sx={styles.savetext}
                disableGutters>
                저 장
              </Container>
            </Button>
          </Container>
        </Modal>
        <Modal
          sx={styles.waringmodal}
          open={waringModalOpen}>
          <Container
            sx={styles.modalwaring}
            disableGutters>
            <Container
              sx={styles.modaltitle}
              disableGutters>
              <Container
                sx={styles.settletext}
                disableGutters>
                경고
              </Container>
            </Container>
            <Container
              sx={styles.waringtext}
              disableGutters>
              이동하면 복구할 수 없습니다. 이동하시겠습니까?
            </Container>
            <Container
              sx={styles.tmform}
              disableGutters>
              <Button
                sx={styles.formbtn1}
                onClick={() => setWaringModalOpen(!waringModalOpen)}>
                <Container
                  sx={styles.fb1name}
                  disableGutters>
                  이 동
                </Container>
              </Button>
              <Button
                sx={styles.initbtn}
                onClick={closeWaringModal}>
                <Container
                  sx={styles.textcan}
                  disableGutters>
                  취소
                </Container>
              </Button>
            </Container>
          </Container>
        </Modal>
        <Modal
          sx={styles.movemodal}
          open={shareModalOpen}>
          <Container
            sx={styles.modalmove}
            disableGutters>
            <Container
              sx={styles.modaltitle}
              disableGutters>
              <Container
                sx={styles.settitle}
                disableGutters>
                <Container
                  sx={styles.settletext}
                  disableGutters>
                  합석
                </Container>
              </Container>
              <Button
                sx={styles.backb}
                onClick={closeShareModal}>
                <Image
                  src='./images/backb.svg'
                  width={24}
                  height={24}
                  priority
                  alt='backb'
                />
              </Button>
            </Container>
            <Container
              sx={styles.mvinputform}
              disableGutters>
              <TextField
                sx={styles.mviftext}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                  },
                }}
                placeholder='현재 테이블 번호 입력'
                fullWidth
              />
              <TextField
                sx={styles.mviftext}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                  },
                }}
                placeholder='합석 테이블 번호 입력'
                fullWidth
              />
            </Container>
            <Button
              sx={styles.movesave}
              onClick={openWaring2Modal}>
              <Container
                sx={styles.savetext}
                disableGutters>
                저 장
              </Container>
            </Button>
          </Container>
        </Modal>
        <Modal
          sx={styles.waringmodal}
          open={waring2ModalOpen}>
          <Container
            sx={styles.modalwaring}
            disableGutters>
            <Container
              sx={styles.modaltitle}
              disableGutters>
              <Container
                sx={styles.settletext}
                disableGutters>
                경고
              </Container>
            </Container>
            <Container
              sx={styles.waringtext}
              disableGutters>
              합석하면 복구할 수 없습니다. 합석하시겠습니까?
            </Container>
            <Container
              sx={styles.tmform}
              disableGutters>
              <Button
                sx={styles.formbtn1}
                onClick={() => setWaring2ModalOpen(!waring2ModalOpen)}>
                <Container
                  sx={styles.fb1name}
                  disableGutters>
                  합 석
                </Container>
              </Button>
              <Button
                sx={styles.initbtn}
                onClick={closeWaring2Modal}>
                <Container
                  sx={styles.textcan}
                  disableGutters>
                  취소
                </Container>
              </Button>
            </Container>
          </Container>
        </Modal>
      </Container>
      <Container disableGutters>
        <TableList maxWidth={false} />
      </Container>
    </Container>
  );
}
