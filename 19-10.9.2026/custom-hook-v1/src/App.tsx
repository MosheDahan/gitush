// @ts-ignore
import { DemoPage } from './DemoPage';
import { FastSearchExercise } from './pages/FastSearchExercise' 
import  NameInput  from './pages/NameInput';
import { LoginForm } from './pages/LoginForm';

function App() {
  // document.title = 'Custom Hook1';
  return (
    <>
    {/* useDocumentTitle("title")
    <h1>Custom Hook</h1>
    <Menu />
    <Users />
    <Posts />
    <CartButtons /> */}
    <LoginForm />
    <DemoPage />
    <FastSearchExercise />
    <NameInput />

    </>
  )
}

export default App