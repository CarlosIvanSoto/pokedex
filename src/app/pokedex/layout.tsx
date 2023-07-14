import Col from "@/components/Col";

export default function Layout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    // <div className='container'>
      <div className='row mt-2'>
        <Col>
          {props.children}
        </Col>
        {props.modal}
      </div>
    // </div>
  )
}
