// Imprimindo múltiplas linhas de texto com uma única instrução.


public class welcome3 
{
    // método main incicia a execução do aplicativo Java
    public static void main(String[] args) 
    {
        System.out.println("Welcome\nto\nJava\nPrograming!");
    } //fim do método main
} // fim da classe welcome

//
//  Sequência de escape  Descrição
//  \n                   Nova linha. Posiciona o cursor de tela no início da pŕoxima linha. 
//  \t                   Tabulação horizontal. Move o cursor de tela para a próxima parada de tabulação
//  \r                   Retorno de carro. Posiciona o cursor da tela no início da linha atual - não avança para a pŕoxima linha. Qualquer saída de caracteres depois do retorno de carro sobrescreve a saída de caracteres anteriormente gerada na linha atual.
//  \\                   Barras invertidas. Utilizadas para imprimir um caractere de barra invertida.
//  \""                  Aspas duplas. Utilizadas para imprimir um caractere de aspas duplas. Por exemplo,
//                            System.out.println("entre aspas\");
//                       exibe "entre aspas".                    