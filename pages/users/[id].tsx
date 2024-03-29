import Layout from '../../components/Layout'

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}
const UserDetail = (props: UserDetailProps) => {
  const { user } = props
  return (
    <Layout pageTitle="Users Detail Page">
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <p>{user?.website}</p>
    </Layout>
  )
}

export default UserDetail

export async function getStaticPaths() {
  const ulieh = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await ulieh.json()

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params
  const ulieh = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await ulieh.json()

  return {
    props: {
      user,
    },
  }
}