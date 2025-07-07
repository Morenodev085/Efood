import React, { useState } from "react";
import { openMessage } from '../../store/reducers/message';

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { AreaPergunta, AreaPerguntaDupla, CaixaDosBotoes, Campo, CampoCartao, CampoEndereco, CheckoutConteiner, TituloEntrega, } from "./styles";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";
import { closeCheckout } from "../../store/reducers/checkout";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Checkout = () => {
    const { items } = useSelector((state: RootReducer) => state.cart);
  
  const { isOpenCheckout } = useSelector((state: RootReducer) => state.checkout);
  const [mostrarEndereco, setMostrarEndereco] = useState(true)
  const dispatch = useDispatch();

  const alteraCampo = () => {
    setMostrarEndereco((prev) => !prev)
  }

  const closemodulo = () => {
    dispatch(closeCheckout())
  };

  const goToMessage = () => {
    dispatch(openMessage())
    closemodulo()
  }

  const form = useFormik({
    initialValues: {
      recptor: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      CVVNumero: '',
      mesDoVencimento: '',
      anoDoVencimento: ''

    },
    validationSchema: Yup.object({
      recptor: Yup.string().min(3, 'O nome Precisa ter pelo menos 3 caracteres').required('O campo e obrigatorio'),
      endereco: Yup.string().min(5, 'O nome Precisa ter pelo menos 5 caracteres').required('O campo e obrigatorio'),
      cidade: Yup.string().min(5, 'O nome Precisa ter pelo menos 5 caracteres').required('O campo e obrigatorio'),
      cep: Yup.number().min(8, 'O cep deve ser preenchido somente com numeros').max(8).required('O campo e obrigatorio'),
      numero: Yup.number().required('O campo e obrigatorio'),
      complemento: Yup.string().notRequired(),
      nomeCartao: Yup.string().min(3, 'o minimo par aesse campo sao 3 caracteres').required('O campo e obrigatorio'),
      numeroCartao: Yup.number().min(16,'O cmapo tem precisa ter 16 caracteres').required('O campo e obrigatorio'),
      CVVNumero: Yup.number().min(3,'numero minimo para o cvv sao 3 caracteres').max(3).required('campo obrigatori'),
      mesDoVencimento: Yup.number().min(2,'O mes do venciemnto deve conter pelo menos 2 caractes').required('Camppo obrigatio'),
      anoDoVencimento: Yup.number().min(4,'Campo do ano deve conter no minimo 4 caracteres').max(4).required('Campoobrigatorio')
    }),
    onSubmit: (value) => {
      console.log(value)
    }
  })

    const getAllPrice = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0);
  };

  return (

    <CheckoutConteiner onSubmit={form.handleSubmit} className={isOpenCheckout ? 'isOpenCheckout' : ''} >
      <Overlay onClick={closemodulo} />
      <Sidebar>
        {/* delivery addresss */}
        <CampoEndereco isVisible={mostrarEndereco} >
          <TituloEntrega>Entrega</TituloEntrega>
          <AreaPergunta>
            <label htmlFor="recptor">Quem ira receber</label>
            <input id="recptor" type="text" name="recptor" value={form.values.recptor} onChange={form.handleChange}
              onBlur={form.handleBlur} />
          </AreaPergunta>
          <AreaPergunta>
            <label htmlFor="endereco">Endereco</label>
            <input id="endereco" type="text" name="endereco" value={form.values.endereco} onChange={form.handleChange}
              onBlur={form.handleBlur} />
          </AreaPergunta>
          <AreaPergunta>
            <label htmlFor="cidade">Cidade</label>
            <input id="cidade" type="text" name="cidade" value={form.values.cidade} onChange={form.handleChange}
              onBlur={form.handleBlur} />
          </AreaPergunta>
          <AreaPerguntaDupla>
            <Campo>
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="number" name="cep" value={form.values.cep} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
            <Campo>
              <label htmlFor="numero">Numero</label>
              <input id="numero" type="number" name="numero" value={form.values.numero} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
          </AreaPerguntaDupla>
          <AreaPergunta>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input id="complemento" type="text" name="complemento" value={form.values.complemento} onChange={form.handleChange}
              onBlur={form.handleBlur} />
          </AreaPergunta>
          <CaixaDosBotoes>
            <BotaoCardapio style={{ marginBottom: 8 }} onClick={alteraCampo}>Finalizar pagamento</BotaoCardapio>
            <BotaoCardapio onClick={closemodulo} >Voltar para o carrinho</BotaoCardapio>
          </CaixaDosBotoes>
        </CampoEndereco>
        {/* Pay card */}
        <CampoCartao isVisible={mostrarEndereco}>
          <TituloEntrega>Pagamento - Valor a pagar {getAllPrice().toFixed(2)}</TituloEntrega>
          <AreaPergunta>
            <label htmlFor="nomeCartao">Nome do Cartão</label>
            <input id="nomeCartao" type="text" name="nomeCartao" value={form.values.nomeCartao} onChange={form.handleChange}
              onBlur={form.handleBlur} />
          </AreaPergunta>

          <AreaPerguntaDupla>
            <Campo>
              <label htmlFor="numeroCartao">Número do cartão</label>
              <input id="numeroCartao" type="number" name="numeroCartao" value={form.values.numeroCartao} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
            <Campo>
              <label htmlFor="CVVNumber">CVV</label>
              <input id="CVVNumber" type="number" name="CVVNumber" value={form.values.CVVNumero} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
          </AreaPerguntaDupla>
          <AreaPerguntaDupla>
            <Campo>
              <label htmlFor="mesDoVencimento">Mês de vencimento</label>
              <input id="mesDoVencimento" type="number" name="mesDoVencimento" value={form.values.mesDoVencimento} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
            <Campo>
              <label htmlFor="anoDoVencimento">Ano de vencimento</label>
              <input id="anoDoVencimento" type="number" name="anoDoVencimento" value={form.values.anoDoVencimento} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </Campo>
          </AreaPerguntaDupla>
          <CaixaDosBotoes>
            <BotaoCardapio type="submit" style={{ marginBottom: 8 }} onClick={goToMessage}>Finalizar pagamento</BotaoCardapio>
            <BotaoCardapio onClick={alteraCampo}>Voltar para a edição de endereço</BotaoCardapio>
          </CaixaDosBotoes>
        </CampoCartao>
      </Sidebar >
    </CheckoutConteiner >
  );
};

export default Checkout;
