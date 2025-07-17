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
import { formataPreco } from "../Cart";

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
    if (isSuccess) {
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
      numero: 0,
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
      numero: Yup.number().required('O campo é obrigatório'),
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
        products: [{
          id: 1,
          price: 10
        }],
        delivery: {
          receiver: values.receptor,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: values.numero,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,  // converter para number
            code: Number(values.CVVNumber),       // converter para number
            expires: {
              month: Number(values.mesDoVencimento),  // converter para number
              year: Number(values.anoDoVencimento)    // converter para number
            }
          }
        }
      })

    }
  })


  const getAllPrice = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0);
  };

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
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
                onBlur={form.handleBlur}
                className={checkInputHasError('receptor') ? 'error' : ''} />
            </AreaPergunta>
            <AreaPergunta>
              <label htmlFor="endereco">Endereco</label>
              <input id="endereco" type="text" name="endereco" value={form.values.endereco} onChange={form.handleChange}
                onBlur={form.handleBlur} className={checkInputHasError('endereco') ? 'error' : ''}/>
            </AreaPergunta>
            <AreaPergunta>
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" name="cidade" value={form.values.cidade} onChange={form.handleChange}
                onBlur={form.handleBlur} className={checkInputHasError('cidade') ? 'error' : ''}/>
            </AreaPergunta>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" name="cep" value={form.values.cep} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('cep') ? 'error' : ''}/>
              </Campo>
              <Campo>
                <label htmlFor="numero">Numero</label>
                <input id="numero" type="number" name="numero" value={form.values.numero} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('numero') ? 'error' : ''}/>
              </Campo>
            </AreaPerguntaDupla>
            <AreaPergunta>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input id="complemento" type="text" name="complemento" value={form.values.complemento} onChange={form.handleChange}
                onBlur={form.handleBlur} className={checkInputHasError('complemento') ? 'error' : ''}/>
            </AreaPergunta>
            <CaixaDosBotoes>
              <BotaoCardapio type="button" style={{ marginBottom: 8 }} onClick={alteraCampo} >Ir para pagamento</BotaoCardapio>
              <BotaoCardapio onClick={closemodulo} >Voltar para o carrinho</BotaoCardapio>
            </CaixaDosBotoes>
          </CampoEndereco>
          {/* Pay card */}
          <CampoCartao isVisible={!mostrarEndereco}>
            <TituloEntrega>Pagamento - Valor a pagar {formataPreco(getAllPrice())}</TituloEntrega>
            <AreaPergunta>
              <label htmlFor="nomeCartao">Nome do Cartão</label>
              <input id="nomeCartao" type="text" name="nomeCartao" value={form.values.nomeCartao} onChange={form.handleChange}
                onBlur={form.handleBlur} className={checkInputHasError('nomeCartao') ? 'error' : ''}/>

            </AreaPergunta>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="numeroCartao">Número do cartão</label>
                <input id="numeroCartao" type="text" name="numeroCartao" value={form.values.numeroCartao} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('numeroCartao') ? 'error' : ''}/>

              </Campo>
              <Campo>
                <label htmlFor="CVVNumber">CVV</label>
                <input id="CVVNumber" type="text" name="CVVNumber" value={form.values.CVVNumber} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('CVVNumero') ? 'error' : ''}/>
              </Campo>
            </AreaPerguntaDupla>
            <AreaPerguntaDupla>
              <Campo>
                <label htmlFor="mesDoVencimento">Mês de vencimento</label>
                <input id="mesDoVencimento" type="text" name="mesDoVencimento" value={form.values.mesDoVencimento} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('mesDoVencimento') ? 'error' : ''}/>
              </Campo>
              <Campo>
                <label htmlFor="anoDoVencimento">Ano de vencimento</label>
                <input id="anoDoVencimento" type="text" name="anoDoVencimento" value={form.values.anoDoVencimento} onChange={form.handleChange}
                  onBlur={form.handleBlur} className={checkInputHasError('anoDoVencimento') ? 'error' : ''}/>
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
