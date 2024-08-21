// questo componente renderizzerà un form per la prenotazione di un tavolo
// da parte dei nostri clienti

import { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// spoiler: questo componente, per poter far funzionare correttamente il form,
// avrà bisogno di uno STATO

// TableBooking sarà composto da un form
// che campi inserire? ho parlato con il mio backender e...

// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// smoking --> boolean
// dateTime --> string (ISO Date)
// specialRequests --> string

class TableBooking extends Component {
  state = {
    reservation: {
      // lo stato iniziale del componente
      // che in questo rappresenta anche lo stato iniziale del form
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-4">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-3">Prenota il tuo tavolo ORA!</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come ti chiami?"
                  required
                  // 1) salviamo nello stato ogni lettera inserita
                  // con questo particolare input dobbiamo riempire
                  // la proprietà "name" dentro reservation nello state
                  onChange={(e) => {
                    console.log('scritto qualcosa in name!', e.target.value)
                    // l'unico modo per cambiare lo stato di un componente
                    // è utilizzare this.setState()
                    this.setState({
                      reservation: {
                        name: e.target.value,
                      },
                    })
                  }}
                />
                {/* il Form.Control altro non è che un <input /> */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>N. telefono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Inserisci un numero italiano"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero di persone</Form.Label>
                <Form.Select required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando volete venire?</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/bambini/animali?</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Button variant="success" type="submit">
                Invia!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TableBooking
