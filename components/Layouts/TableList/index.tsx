import { Button, Container } from '@mui/material';
import { useState } from 'react';
import styles from './styles';
import OrderDetails from '../OrderDetails';

interface TableListProps {
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export default function TableList({ maxWidth }: TableListProps) {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedTableNumber, setSelectedTableNumber] = useState(0);

  const handleButtonClick = (tableNumber: number) => {
    setSelectedTableNumber(tableNumber);
    setShowOrderDetails(true);
  };
  return (
    <Container
      sx={styles.root}
      maxWidth={maxWidth}>
      {showOrderDetails ? (
        <OrderDetails tableNumber={selectedTableNumber} />
      ) : (
        <>
          <Container
            sx={styles.line1}
            maxWidth={maxWidth}
            disableGutters>
            {[1, 2, 3, 4].map((tableNumber) => (
              <Button
                key={tableNumber}
                sx={styles.table1}
                onClick={() => handleButtonClick(tableNumber)}>
                <Container
                  sx={styles.tle}
                  disableGutters>
                  <Container
                    sx={styles.bt1}
                    disableGutters>
                    <Container
                      sx={styles.bt1text}
                      disableGutters>
                      Table #{tableNumber}
                    </Container>
                  </Container>
                  <Container
                    sx={styles.bt2}
                    disableGutters>
                    <Container
                      sx={styles.bt2text}
                      disableGutters>
                      예약 OOO 12:00
                    </Container>
                  </Container>
                </Container>
                <Container
                  sx={styles.info}
                  disableGutters>
                  <Container
                    sx={styles.list0}
                    disableGutters>
                    <Container
                      sx={styles.dataf}
                      disableGutters>
                      <Container
                        sx={styles.datat}
                        disableGutters>
                        AAA
                      </Container>
                      <Container
                        sx={styles.datat2}
                        disableGutters>
                        x2
                      </Container>
                    </Container>
                    <Container
                      sx={styles.dataf}
                      disableGutters>
                      <Container
                        sx={styles.datat}
                        disableGutters>
                        BBB
                      </Container>
                      <Container
                        sx={styles.datat2}
                        disableGutters>
                        x1
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    sx={styles.pay}
                    disableGutters>
                    <Container
                      sx={styles.payt1}
                      disableGutters>
                      결제 금액
                    </Container>
                    <Container
                      sx={styles.payt2}
                      disableGutters>
                      10,000 원
                    </Container>
                  </Container>
                </Container>
              </Button>
            ))}
          </Container>
          <Container
            sx={styles.line1}
            maxWidth={maxWidth}
            disableGutters>
            {[5, 6, 7, 8].map((tableNumber) => (
              <Button
                key={tableNumber}
                sx={styles.table1}
                onClick={() => handleButtonClick(tableNumber)}>
                <Container
                  sx={styles.tle}
                  disableGutters>
                  <Container
                    sx={styles.bt1}
                    disableGutters>
                    <Container
                      sx={styles.bt1text}
                      disableGutters>
                      Table #{tableNumber}
                    </Container>
                  </Container>
                  <Container
                    sx={styles.bt2}
                    disableGutters>
                    <Container
                      sx={styles.bt2text}
                      disableGutters>
                      예약 OOO 12:00
                    </Container>
                  </Container>
                </Container>
                <Container
                  sx={styles.info}
                  disableGutters>
                  <Container
                    sx={styles.list0}
                    disableGutters>
                    <Container
                      sx={styles.dataf}
                      disableGutters>
                      <Container
                        sx={styles.datat}
                        disableGutters>
                        AAA
                      </Container>
                      <Container
                        sx={styles.datat2}
                        disableGutters>
                        x2
                      </Container>
                    </Container>
                    <Container
                      sx={styles.dataf}
                      disableGutters>
                      <Container
                        sx={styles.datat}
                        disableGutters>
                        BBB
                      </Container>
                      <Container
                        sx={styles.datat2}
                        disableGutters>
                        x1
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    sx={styles.pay}
                    disableGutters>
                    <Container
                      sx={styles.payt1}
                      disableGutters>
                      결제 금액
                    </Container>
                    <Container
                      sx={styles.payt2}
                      disableGutters>
                      10,000 원
                    </Container>
                  </Container>
                </Container>
              </Button>
            ))}
          </Container>
        </>
      )}
    </Container>
  );
}
