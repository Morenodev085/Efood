import React, { useState, useEffect } from "react";
import { openMessage } from '../../store/reducers/message';

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { AreaPergunta, AreaPerguntaDupla, CaixaDosBotoes, Campo, CampoCartao, CampoEndereco, CheckoutConteiner, TituloEntrega, } from "./styles";
import { BotaoCardapio, Overlay, Sidebar } from "../../styles";
import { closeCheckout } from "../../store/reducers/checkout";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { usePurcheaseMutation } from "../../services/api";

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [purchease, { isLoading, isError, data, isSuccess }] = usePurcheaseMutation()
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

  useEffect(() => {
    if(isSuccess){
      goToMessage();
      form.resetForm();
    }
  }, [isSuccess])

  const form = useFormik({
    initialValues: {
      receptor: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      CVVNumber: '',
      mesDoVencimento: '',
      anoDoVencimento: ''

    },
    validationSchema: Yup.object({
      receptor: Yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
      endereco: Yup.string().min(5, 'O endereço precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      cidade: Yup.string().min(5, 'A cidade precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      cep: Yup.string().matches(/^\d{8}$/, 'O CEP deve ter 8 dígitos numéricos').required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string().notRequired(),
      nomeCartao: Yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
      numeroCartao: Yup.string().matches(/^\d{16}$/, 'O número do cartão deve ter 16 dígitos').required('O campo é obrigatório'),
      CVVNumber: Yup.string().matches(/^\d{3}$/, 'O CVV deve ter 3 dígitos').required('O campo é obrigatório'),
      mesDoVencimento: Yup.string().matches(/^(0[1-9]|1[0-2])$/, 'Digite um mês válido (01 a 12)').required('Campo obrigatório'),
      anoDoVencimento: Yup.string().matches(/^\d{4}$/, 'Digite um ano com 4 dígitos').required('Campo obrigatório'),
    }),

onSubmit: (values) => {
  console.log('form errors', form.errors)
    console.log('Submitting:', values)
  purchease({
    product: [{
      id: 1,
      price:10
    }],
    delivery: {
      receiver: values.receptor,
      address: {
        description: values.endereco,
        city: values.cidade,
        zipCode: values.cep,
        number: String(values.numero), // string
        complement: values.complemento
      }
    },
    payment: {
      card: {
        name: values.nomeCartao,
        number: Number(values.numeroCartao),  // converter para number
        code: Number(values.CVVNumber),       // converter para number
        expires: {
          month: Number(values.mesDoVencimento),  // converter para number
          year: Number(values.anoDoVencimento)    // converter para number
        }
      }
    }
  })

}})


  const getAllPrice = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0);
  };

  const getErrorMessage = (fieldName: string, massage?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return massage
    return ''
  }

  return (
    <CheckoutConteiner className={isOpenCheckout ? 'isOpenCheckout' : ''} >
      <Overlay onClick={closemodulo} />
      <Sidebar>
        <form onSubmit={form.handleSubmit} >
          {/* delivery addresss */}
          <CampoEndereco isVisible={mostrarEndereco} >
            <TituloEntrega>Entrega </TituloEntrega>
            <AreaPergunta>
              <label htmlFor="receptor">Quem ira receber</label>
              <input id="receptor" type="text" name="receptor" value={form.values.receptor} onChange={form.handleChange}
                onBlur={form.handleBlur} />
              <small>{getErrorMessage('receptor', form.errors.receptor)}</small>
            </AreaPergunta>
            <AreaPergunta>
              <label htmlFor="endereco">Endereco</label>
              <input id="endereco" type="text" name="endereco" value={form.values.endereco} onChange={form.handleChange}
                onBlur={form.handleBlur} />
              <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
            </AreaPergunta>
            <AreaPergunta>
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" name="cidade" value={form.values.cidade} onChange={form.handleChange}
                onBlur={form.handleBlur} />
              <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
            </AreaPergunta>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" name="cep" value={form.values.cep} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('cep', form.errors.cep)}</small>
              </Campo>
              <Campo>
                <label htmlFor="numero">Numero</label>
                <input id="numero" type="number" name="numero" value={form.values.numero} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('numero', form.errors.numero)}</small>
              </Campo>
            </AreaPerguntaDupla>
            <AreaPergunta>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input id="complemento" type="text" name="complemento" value={form.values.complemento} onChange={form.handleChange}
                onBlur={form.handleBlur} />
            </AreaPergunta>
            <CaixaDosBotoes>
              <BotaoCardapio type="button" style={{ marginBottom: 8 }} onClick={alteraCampo}>Ir para pagamento</BotaoCardapio>
              <BotaoCardapio onClick={closemodulo} >Voltar para o carrinho</BotaoCardapio>
            </CaixaDosBotoes>
          </CampoEndereco>
          {/* Pay card */}
          <CampoCartao isVisible={!mostrarEndereco}>
            <TituloEntrega>Pagamento - Valor a pagar {getAllPrice().toFixed(2)}</TituloEntrega>
            <AreaPergunta>
              <label htmlFor="nomeCartao">Nome do Cartão</label>
              <input id="nomeCartao" type="text" name="nomeCartao" value={form.values.nomeCartao} onChange={form.handleChange}
                onBlur={form.handleBlur} />
              <small>{getErrorMessage('nomeCartao', form.errors.nomeCartao)}</small>
            </AreaPergunta>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="numeroCartao">Número do cartão</label>
                <input id="numeroCartao" type="text" name="numeroCartao" value={form.values.numeroCartao} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('numeroCartao', form.errors.numeroCartao)}</small>
              </Campo>
              <Campo>
                <label htmlFor="CVVNumber">CVV</label>
                <input id="CVVNumber" type="text" name="CVVNumber" value={form.values.CVVNumber} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('CVVNumber', form.errors.CVVNumber)}</small>
              </Campo>
            </AreaPerguntaDupla>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="mesDoVencimento">Mês de vencimento</label>
                <input id="mesDoVencimento" type="text" name="mesDoVencimento" value={form.values.mesDoVencimento} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('mesDoVencimento', form.errors.mesDoVencimento)}</small>
              </Campo>
              <Campo>
                <label htmlFor="anoDoVencimento">Ano de vencimento</label>
                <input id="anoDoVencimento" type="text" name="anoDoVencimento" value={form.values.anoDoVencimento} onChange={form.handleChange}
                  onBlur={form.handleBlur} />
                <small>{getErrorMessage('anoDoVencimento', form.errors.anoDoVencimento)}</small>
              </Campo>
            </AreaPerguntaDupla>
            <CaixaDosBotoes>
              <BotaoCardapio type="submit" style={{ marginBottom: 8 }} >
                Finalizar pagamento
              </BotaoCardapio>
              <BotaoCardapio onClick={alteraCampo}>Voltar para a edição de endereço</BotaoCardapio>
            </CaixaDosBotoes>
          </CampoCartao>
        </form>
      </Sidebar >
    </CheckoutConteiner >
  );
};

export default Checkout;
