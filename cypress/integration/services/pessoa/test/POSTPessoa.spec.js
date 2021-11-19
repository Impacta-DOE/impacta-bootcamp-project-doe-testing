import * as POSTPessoa from '../request/POSTPessoa.request';

const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 500

describe('Cadastrar Pessoas', () => {
    it('Cadastrar pessoa fisica', () =>{
        POSTPessoa.salvarPF().should((response) => {
            expect(response.status).to.eq(HTTP_BAD_REQUEST);
            expect(response.body).to.be.not.null;
        })
    })

    it('Cadastrar pessoa juridica', () => {
        POSTPessoa.salvarPJ().should((response) => {
            expect(response.status).to.eq(HTTP_BAD_REQUEDT);
            expect(response.body).to.be.not.null;
            //expect(response.body.id).to.be.not.empty - Implementar a correção
        })
    })

    it('Cadastrar pessoa fisica sem documento (CPF)', () => {
        POSTPessoa.salvarPfSemDocumento().should((response) => {
            expect(response.status).to.eq(HTTP_BAD_REQUEDT);
            //expect(response.body.mensagem).to.eq(''); - Implementar a correção
        })
    })

    it('Cadastrar pessoa juridica sem documento (CNPJ)', () => {
        POSTPessoa.salvarPjSemDocumento().should((response) => {
            expect(response.status).to.eq(HTTP_BAD_REQUEDT)
        })
    })

})  