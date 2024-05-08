import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import Home from './paginas/home/Home'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTemas/FormularioTemas'
import DeletarTema from './components/temas/deletarTemas/DeletarTemas'

function App() {
    return (
        <AuthProvider>  {/* Compartilha com a Aplicação todos os dados do Contexto */}
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>  {/* Define o tamanho minimo das páginas */}
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/temas" element={<ListaTemas />} />
                        <Route path="/cadastroTema" element={<FormularioTema />} />
                        <Route path="/editarTema/:id" element={<FormularioTema />} />   {/* :id = é uma variavel que vem pela url do Front, que represenda o id do item que vai ser editado */}
                        <Route path="/deletarTema/:id" element={<DeletarTema />} />     {/* :id = é uma variavel que vem pela url do Front, que represenda o id do item que vai ser excluído */}
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    )
}

export default App