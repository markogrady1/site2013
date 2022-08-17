import React from 'react'

export default function Page(props) {
  return (
    <div>blog page {props.id}</div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {
      id
    }
  }
}
